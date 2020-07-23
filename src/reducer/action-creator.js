import {ActionType} from "./action-types";
import {MAX_SHOWN_MOVIES} from "../constants";

const ActionCreator = {
  getActiveGenre: (genre) => ({
    type: ActionType.ACTIVE_GENRE,
    payload: genre,
  }),

  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: MAX_SHOWN_MOVIES,
  }),

  getActiveMovie: (activeMovie) => ({
    type: ActionType.ACTIVE_MOVIE,
    payload: activeMovie,
  }),
  activateMovieVideoplayer: (state) => ({
    type: ActionType.ACTIVATE_MOVIE_VIDEOPLAYER,
    payload: state,
  })
};

export {ActionCreator};
