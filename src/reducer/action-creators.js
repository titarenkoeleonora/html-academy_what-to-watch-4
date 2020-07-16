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
  })
};

export {ActionCreator};
