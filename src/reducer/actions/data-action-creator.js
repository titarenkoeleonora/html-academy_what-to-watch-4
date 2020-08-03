import {DataActionType} from "./data-action-types";

const DataActionCreator = {
  loadPromoMovie: (promoMovie) => {
    return {
      type: DataActionType.LOAD_PROMO_MOVIE,
      payload: promoMovie
    };
  },

  loadMovies: (movies) => {
    return {
      type: DataActionType.LOAD_MOVIES,
      payload: movies,
    };
  },

  loadReviews: (reviews) => {
    return {
      type: DataActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },

  loadFavoriteMovies: (movies) => ({
    type: DataActionType.LOAD_FAVORITE_MOVIES,
    payload: movies,
  }),

  catchError: () => {
    return {
      type: DataActionType.CATCH_ERROR,
      payload: true,
    };
  }
};

export {DataActionCreator};
