import {extend} from "../utils";
import {moviesMock} from "../mocks/movies";
import {ActionType} from "./action-types";
import {MAX_SHOWN_MOVIES, Movie} from "../constants";

const initialState = {
  activeGenre: `All genres`,
  movies: moviesMock,
  activeMovie: Movie,
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
    case ActionType.ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: action.payload.activeMovie,
      });
  }

  return state;
};

export {reducer};
