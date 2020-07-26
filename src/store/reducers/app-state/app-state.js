import {extend} from "../../utils";
import {ActionType} from "../actions/action-types";
import {MAX_SHOWN_MOVIES} from "../../constants";

const initialState = {
  activeGenre: `All genres`,
  shownMoviesCount: MAX_SHOWN_MOVIES,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesCount: state.shownMoviesCount + action.payload,
      });
  }

  return state;
};

export {reducer, initialState};
