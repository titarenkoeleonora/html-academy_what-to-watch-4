import {ActionType} from "./action-types";

const ActionCreator = {
  getActiveGenre: (genre) => ({
    type: ActionType.ACTIVE_GENRE,
    payload: genre,
  }),
};

export {ActionCreator};
