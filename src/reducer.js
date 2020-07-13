import {extend} from "./utils";
import {moviesMock} from "./mocks/movies";

const initialState = {
  activeGenre: `All genres`,
  movies: moviesMock,
};

const ActionType = {
  ACTIVE_GENRE: `ACTIVE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const ActionCreator = {
  getActiveGenre: (genre) => ({
    type: ActionType.ACTIVE_GENRE,
    payload: genre,
  }),

  getMoviesByGenre: (activeGenre) => {
    const filteredMovies = filterMovies(activeGenre);

    return {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filteredMovies,
    };
  },
};

const filterMovies = (activeGenre) => {
  const allMovies = initialState.movies;

  if (activeGenre === `All genres`) {
    return allMovies;
  }

  const filteredMovies = allMovies.filter((movie) => movie.genre === activeGenre);

  return filteredMovies;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        movies: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
