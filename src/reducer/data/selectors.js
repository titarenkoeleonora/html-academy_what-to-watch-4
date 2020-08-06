import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {getActiveGenre} from '../app-state/selectors';

export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getReviews = (state) => state[NameSpace.DATA].reviews;

export const getIsError = (state) => state[NameSpace.DATA].isError;

export const getFavoriteMovies = (state) => state[NameSpace.DATA].favoriteMovies;

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

