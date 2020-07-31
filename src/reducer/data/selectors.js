import {createSelector} from 'reselect';
import {getActiveGenre, getActiveMovie} from '../app-state/selectors';
import NameSpace from '../name-space';
import {MAX_SHOWN_MOVIES} from '../../constants';

export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getReviews = (state) => state[NameSpace.DATA].reviews;

export const getIsError = (state) => state[NameSpace.DATA].isError;

export const getGenresList = createSelector(
    getMovies,
    (movies) => {
      return [`All genres`, ...new Set(movies.map((movie) => movie.genre))];
    }
);

export const getFilteredMovies = createSelector(
    getMovies,
    getActiveGenre,
    (movies, activeGenre) => {
      if (activeGenre === `All genres`) {
        return movies;
      } else {
        return movies.filter((movie) => movie.genre === activeGenre);
      }
    }
);

export const getRelatedMovies = createSelector(
    getFilteredMovies,
    getActiveMovie,
    (filteredMovies, activeMovie) => {
      return (filteredMovies
        .filter((movie) => movie.id !== activeMovie.id)
        .slice(0, MAX_SHOWN_MOVIES)
      );
    }
);
