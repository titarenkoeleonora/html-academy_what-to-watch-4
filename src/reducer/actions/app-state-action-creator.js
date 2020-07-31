import {MAX_SHOWN_MOVIES} from "../../constants";
import {AppStateActionType} from "./app-state-action-types";

const AppStateActionCreator = {
  getActiveGenre: (genre) => ({
    type: AppStateActionType.ACTIVE_GENRE,
    payload: genre,
  }),

  showMoreMovies: () => ({
    type: AppStateActionType.SHOW_MORE_MOVIES,
    payload: MAX_SHOWN_MOVIES,
  }),

  getActiveMovie: (activeMovie) => ({
    type: AppStateActionType.ACTIVE_MOVIE,
    payload: activeMovie,
  }),
  activateMovieVideoplayer: (state) => ({
    type: AppStateActionType.ACTIVATE_MOVIE_VIDEOPLAYER,
    payload: state,
  })
};

export {AppStateActionCreator};
