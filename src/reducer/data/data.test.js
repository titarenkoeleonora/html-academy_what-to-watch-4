import MockAdapter from 'axios-mock-adapter';
import {initialState, reducer, Operation} from './data';
import {createAPI} from '../../api';
import {createMovie} from '../../adapter/movies';
import {DataActionType} from '../actions/data-action-types';

const testMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const testMovies = [
  {
    id: 0,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    date: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 8.9,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: 39,
  },
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Fantasy`,
    date: 2018,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 9.9,
    votes: 440,
    director: `David Yates`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`, `Alison Sudol`, `Ezra Miller`, `Zoë Kravitz`, `Callum Turner`, `Claudia Kim`, `William Nadylam`, `Kevin Guthrie`, `Jude Law`, `Johnny Depp`],
    runTime: `2h 14m`,
  },
  {
    id: 2,
    title: `Bohemian Rhapsod`,
    genre: `Drama`,
    date: 2019,
    poster: `img/bohemian-rhapsody.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 9.5,
    votes: 650,
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`],
    runTime: 14,
  }
];

const testReviews = [
  {
    id: 1,
    user: {},
    date: `December 24, 2016`,
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  },
  {
    id: 2,
    user: {},
    date: `November 18, 2015`,
    rating: 8.0,
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
];

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
});
