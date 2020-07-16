import {extend} from "../utils";
import {moviesMock} from "../mocks/movies";
import {ActionType} from "./action-types";

const initialState = {
  activeGenre: `All genres`,
  movies: moviesMock,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
  }

  return state;
};

export {reducer};
