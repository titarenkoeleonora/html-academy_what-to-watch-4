import {MAX_RELATED_MOVIES_COUNT} from "./constants";
import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getTimeElapsed = (duration) => {
  const seconds = Math.trunc(duration % 60);
  const minutes = Math.trunc(duration / 60);
  const hours = Math.trunc(minutes / 60);

  return [
    (`0` + hours).slice(-2),
    (`0` + minutes).slice(-2),
    (`0` + seconds).slice(-2)
  ].join(`:`);
};

export const getFilteredMovies = (movies, activeGenre) => {
  if (activeGenre === `All genres`) {
    return movies;
  } else {
    return movies.filter((movie) => movie.genre === activeGenre);
  }
};

export const validateEmail = (evt) => {
  const inputEmail = evt.target.value;
  const pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

  if (inputEmail === ``) {
    evt.target.setCustomValidity(`Email is required`);
    return;
  }

  if (!pattern.test(inputEmail)) {
    evt.target.setCustomValidity(`Email must be in the format email@mail.com`);
    return;
  }
};

export const validatePassword = (evt) => {
  const inputPassword = evt.target.value;

  if (inputPassword === ``) {
    evt.target.setCustomValidity(`Password is required`);
    return;
  }
};

export const getRelatedMovies = (filteredMovies, activeMovie) => {
  return (filteredMovies
    .filter((movie) => movie.genre === activeMovie.genre)
    .slice(0, MAX_RELATED_MOVIES_COUNT)
  );
};

export const getMovieById = (movies, id) => {
  return movies.find((movie) => movie.id === id);
};

export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  }

  if (rating >= 3 && rating < 5) {
    return `Normal`;
  }

  if (rating >= 5 && rating < 8) {
    return `Good`;
  }

  if (rating >= 8 && rating < 10) {
    return `Very good`;
  }

  if (rating === 10) {
    return `Awesome`;
  }

  return null;
};

export const formatMovieDuration = (duration) => {
  return moment.duration(duration, `minutes`).format(`h[h] m[m]`);
};
