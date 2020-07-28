import {MAX_SHOWN_MOVIES} from "../../constants";
import {extend} from "../../utils";
import {AppStateActionType} from "../actions/app-state-action-types";

const initialState = {
  activeGenre: `All genres`,
  activeMovie: null,
  shownMoviesCount: MAX_SHOWN_MOVIES,
  isMovieVideoplayerActive: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AppStateActionType.ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case AppStateActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesCount: state.shownMoviesCount + action.payload,
      });
    case AppStateActionType.ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload,
      });
    case AppStateActionType.ACTIVATE_MOVIE_VIDEOPLAYER:
      return extend(state, {
        isMovieVideoplayerActive: action.payload,
      });
  }

  return state;
};

export {reducer, initialState};
