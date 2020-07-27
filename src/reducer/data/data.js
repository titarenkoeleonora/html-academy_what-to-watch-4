import {createMovie} from "../../adapter/movies";
import {emptyMovie} from "../../constants";
import {extend} from "../../utils";

const initialState = {
  promoMovie: emptyMovie,
  movies: [],
  reviews: [],
  isError: false,
};

const ActionType = {
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CATCH_ERROR: `CATCH_ERROR`,
};

const ActionCreator = {
  loadPromoMovie: (promoMovie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie
    };
  },

  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },

  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  catchError: () => {
    return {
      type: ActionType.CATCH_ERROR,
      payload: true,
    };
  }
};

const Operation = {
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(createMovie(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.catchError());
      });
  },

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const movies = response.data.map((movie) => createMovie(movie));
        dispatch(ActionCreator.loadMovies(movies));
      })
      .catch(() => {
        dispatch(ActionCreator.catchError());
      });
  },

  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.catchError(true));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        movieReviews: action.payload,
      });
    case ActionType.CATCH_ERROR:
      return extend(state, {
        isError: action.payload,
      });
  }

  return state;
};

export {ActionType, ActionCreator, Operation, reducer, initialState};
