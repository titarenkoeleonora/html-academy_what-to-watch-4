import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {getActiveGenre} from '../app-state/selectors';
import {ALL_GENRES_GENRE} from '../../constants';

export const getPromoMovie = (state) => state[NameSpace.DATA].promoMovie;

export const getMovies = (state) => state[NameSpace.DATA].movies;

export const getReviews = (state) => state[NameSpace.DATA].reviews;

export const getIsError = (state) => state[NameSpace.DATA].isError;

export const getSubmitStatus = (state) => state[NameSpace.DATA].submitStatus;

export const getFavoriteMovies = (state) => state[NameSpace.DATA].favoriteMovies;

export const getGenresList = createSelector(
    getMovies,
    (movies) => {
      return [ALL_GENRES_GENRE, ...new Set(movies.map((movie) => movie.genre))];
    }
);

export const getFilteredMovies = createSelector(
    getMovies,
    getActiveGenre,
    (movies, activeGenre) => {
      if (activeGenre === ALL_GENRES_GENRE) {
        return movies;
      } else {
        return movies.filter((movie) => movie.genre === activeGenre);
      }
    }
);

