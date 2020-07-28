import {createMovie} from "../../adapter/movies";
import {emptyMovie} from "../../constants";
import {extend} from "../../utils";
import {DataActionType} from "../actions/data-action-types";
import {DataActionCreator} from "../actions/data-action-creator";

const initialState = {
  promoMovie: emptyMovie,
  movies: [],
  reviews: [],
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
        dispatch(DataActionCreator.catchError(true));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });
    case DataActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case DataActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case DataActionType.CATCH_ERROR:
      return extend(state, {
        isError: action.payload,
      });
  }

  return state;
};

export {Operation, reducer, initialState};
