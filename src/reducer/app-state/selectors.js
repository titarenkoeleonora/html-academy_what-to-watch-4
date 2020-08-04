import NameSpace from "../name-space";

export const getActiveGenre = (state) => state[NameSpace.APP_STATE].activeGenre;

export const getActiveMovie = (state) => state[NameSpace.APP_STATE].activeMovie;

export const getIsMovieVideoplayerActive = (state) => state[NameSpace.APP_STATE].isMovieVideoplayerActive;

export const getShownMoviesCount = (state) => state[NameSpace.APP_STATE].shownMoviesCount;

export const getIsReviewOpen = (state) => state[NameSpace.APP_STATE].isReviewOpen;

export const getIsFormDisabled = (state) => state[NameSpace.APP_STATE].isFormDisabled;
