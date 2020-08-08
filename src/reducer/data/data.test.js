import MockAdapter from 'axios-mock-adapter';
import {initialState, reducer, Operation} from './data';
import {createAPI} from '../../api';
import {createMovie} from '../../adapter/movies';
import {DataActionType} from '../actions/data-action-types';
import {SubmitStatus} from '../../constants';

const testMovie = {
  id: 0,
  title: `Movie title`,
  poster: ``,
  previewImage: ``,
  bgImage: ``,
  backgroundColor: ``,
  src: ``,
  previewVideoLink: ``,
  description: ``,
  rating: 8.2,
  votes: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  runTime: 99,
  genre: `Genre`,
  date: 2020,
  isFavorite: true,
};

const testMovies = [
  {
    id: 0,
    title: `Movie title`,
    poster: ``,
    previewImage: ``,
    bgImage: ``,
    backgroundColor: ``,
    src: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
    genre: `Genre`,
    date: 2020,
    isFavorite: true,
  },
  {
    id: 1,
    title: `Movie title`,
    poster: ``,
    previewImage: ``,
    bgImage: ``,
    backgroundColor: ``,
    src: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
    genre: `Genre`,
    date: 2020,
    isFavorite: true,
  },
  {
    id: 2,
    title: `Movie title`,
    poster: ``,
    previewImage: ``,
    bgImage: ``,
    backgroundColor: ``,
    src: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 8.2,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 99,
    genre: `Genre`,
    date: 2020,
    isFavorite: true,
  }
];

const testReviews = [
  {
    id: 1,
    user: {},
    date: `December 24, 2016`,
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  }
];

const testPostReview = {
  comment: ``,
  rating: 5,
};

const api = createAPI(() => {});

describe(`Data Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should update PromoMovie by load`, () => {
    expect(reducer({
      promoMovie: {},
    }, {
      type: DataActionType.LOAD_PROMO_MOVIE,
      payload: testMovie,
    })).toEqual({
      promoMovie: testMovie,
      isError: false,
    });
  });

  it(`Reducer should update movies by load`, () => {
    expect(reducer({
      movies: [],
    }, {
      type: DataActionType.LOAD_MOVIES,
      payload: testMovies,
    })).toEqual({
      movies: testMovies,
      isError: false,
    });
  });

  it(`Reducer should update reviews by load`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: DataActionType.LOAD_REVIEWS,
      payload: testReviews,
    })).toEqual({
      reviews: testReviews,
      isError: false,
    });
  });

  it(`Reducer should update favorite movies by load`, () => {
    expect(reducer({
      favoriteMovies: [],
    }, {
      type: DataActionType.LOAD_FAVORITE_MOVIES,
      payload: testMovies,
    })).toEqual({
      favoriteMovies: testMovies,
      isError: false,
    });
  });

  it(`Reducer should catch error on load fail`, () => {
    expect(reducer({
      isError: false,
    }, {
      type: DataActionType.CATCH_ERROR,
      payload: true,
    })).toEqual({
      isError: true,
    });
  });

  it(`Reducer should return correct submit status`, () => {
    expect(reducer({
      submitStatus: SubmitStatus.DEFAULT,
    }, {
      type: DataActionType.GET_SUBMIT_STATUS,
      payload: SubmitStatus.SUCCESS,
    })).toEqual({
      submitStatus: SubmitStatus.SUCCESS,
      isError: false,
    });
  });
});

describe(`Operations work correctly`, () => {
  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const activeMovieLoad = Operation.loadPromoMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return activeMovieLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: DataActionType.LOAD_PROMO_MOVIE,
              payload: createMovie({fake: true}),
            });
          });
  });

  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoad = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: DataActionType.LOAD_MOVIES,
              payload: [createMovie({fake: true})],
            });
          });
  });

  it(`Should make a correct API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoad = Operation.loadReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return reviewsLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: DataActionType.LOAD_REVIEWS,
              payload: [{fake: true}],
            });
          });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoad = Operation.loadFavoriteMovies(1);

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return moviesLoad(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
              type: DataActionType.LOAD_FAVORITE_MOVIES,
              payload: [createMovie({fake: true})],
            });
          });
  });
});

it(`Should send review to /comments/1`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const postReview = Operation.postReview(1, testPostReview);

  apiMock
    .onPost(`/comments/1`)
    .reply(200, [{fake: true}]);

  return postReview(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledWith({
            type: DataActionType.POST_REVIEW,
            payload: testPostReview,
          });
        });
});

it(`Should send favorite movie status`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  const checkMovieIsFavorite = Operation.changeFavoriteStatus(1);

  apiMock
    .onPost(`/favorite/1/1`)
    .reply(200, [{fake: true}]);

  return checkMovieIsFavorite(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
        });
});
