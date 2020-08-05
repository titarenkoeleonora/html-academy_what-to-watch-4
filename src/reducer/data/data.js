import {createMovie} from "../../adapter/movies";
import {emptyMovie} from "../../constants";
import {extend} from "../../utils";
import {DataActionType} from "../actions/data-action-types";
import {DataActionCreator} from "../actions/data-action-creator";
import {AppStateActionCreator} from "../actions/app-state-action-creator";

const initialState = {
  promoMovie: emptyMovie,
  movies: [],
  reviews: [],
  favoriteMovies: [],
  isError: false,
};

const Operation = {
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(DataActionCreator.loadPromoMovie(createMovie(response.data)));
      })
      .catch(() => {
        dispatch(DataActionCreator.catchError());
      });
  },

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = response.data.map((movie) => createMovie(movie));
        dispatch(DataActionCreator.loadMovies(movies));
      })
      .catch(() => {
        dispatch(DataActionCreator.catchError());
      });
  },

  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(DataActionCreator.loadReviews(response.data));
      })
      .catch(() => {
        dispatch(DataActionCreator.catchError());
      });
  },

  loadFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        if (response.data) {
          const favoriteMovies = response.data.map((favoriteMovie) => createMovie(favoriteMovie));
          dispatch(DataActionCreator.loadFavoriteMovies(favoriteMovies));
        }
      })
      .catch(() => {
        dispatch(DataActionCreator.catchError());
      });
  },

  postReview: (movie, review) => (dispatch, getState, api) => {
    return api.post(`comments/${movie.id}`, {
      rating: review.rating,
      comment: review.comment,
    })
    .then(() => {
      dispatch(DataActionCreator.postReview(review));
      dispatch(Operation.loadReviews(movie.id));
    }).
    then(() => {
      dispatch(AppStateActionCreator.addReview(false));
      dispatch(AppStateActionCreator.toggleFormState(false));
    })
    .catch(() => {
      dispatch(DataActionCreator.catchError());
    });
  },
  changeFavoriteStatus: (movie) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movie.id}/${movie.isFavorite ? 0 : 1}`)
    .then(() => {
      dispatch(Operation.loadMovies());
      dispatch(Operation.loadPromoMovie());
      dispatch(Operation.loadFavoriteMovies());
    })
    .catch(() => {
      dispatch(DataActionCreator.catchError());
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
        isError: null,
      });
    case DataActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
        isError: null,
      });
    case DataActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
        isError: null,
      });
    case DataActionType.LOAD_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload,
        isError: null,
      });
    case DataActionType.CATCH_ERROR:
      return extend(state, {
        isError: action.payload,
      });
  }

  return state;
};

export {Operation, reducer, initialState};
