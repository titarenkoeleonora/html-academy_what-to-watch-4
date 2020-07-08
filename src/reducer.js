import {extend} from "./utils";

const initialState = {
  genre: `drama`,
};

const ActionType = {
  MOVIES_BY_GENRE: `MOVIES_BY_GENRE`,
  GET_MOVIES_LIST: `GET_MOVIES_LIST`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOVIES_BY_GENRE:
      return extend(state, {
        moviesByGenre: action.payload,
      });
    case ActionType.GET_MOVIES_LIST:
      return extend(state, {
        filteredList: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType};
