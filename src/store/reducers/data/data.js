import {extend} from "../../utils";
import {ActionType} from "../actions/action-types";
import {emptyMovie} from "../../constants";

const initialState = {
  activeMovie: emptyMovie,
  isMovieVideoplayerActive: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload,
      });
    case ActionType.ACTIVATE_MOVIE_VIDEOPLAYER:
      return extend(state, {
        isMovieVideoplayerActive: action.payload,
      });
  }

  return state;
};

export {reducer, initialState};
