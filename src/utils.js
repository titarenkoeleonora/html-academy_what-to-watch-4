import {MAX_SHOWN_MOVIES} from "./constants";

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getTimeElapsed = (duration) => {
  const seconds = Math.trunc(duration % 60);
  const minutes = Math.trunc(duration / 60);
  const hours = Math.trunc(minutes / 60);

  return [
    (`0` + hours).slice(-2),
    (`0` + minutes).slice(-2),
    (`0` + seconds).slice(-2)
  ].join(`:`);
};

const getFilteredMovies = (movies, activeGenre) => {
  if (activeGenre === `All genres`) {
    return movies;
  } else {
    return movies.filter((movie) => movie.genre === activeGenre);
  }
};

const validateEmail = (evt) => {
  const inputEmail = evt.target.value;
  const pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

  if (inputEmail === ``) {
    evt.target.setCustomValidity(`Email is required`);
    return;
  }

  if (!inputEmail.match(pattern)) {
    evt.target.setCustomValidity(`Email must be in the format email@mail.com`);
    return;
  }
};

const validatePassword = (evt) => {
  const inputPassword = evt.target.value;

  if (inputPassword === ``) {
    evt.target.setCustomValidity(`Password is required`);
    return;
  }
};

const getRelatedMovies = (filteredMovies, activeMovie) => {
  return (filteredMovies
    .filter((movie) => movie.genre === activeMovie.genre)
    .slice(0, MAX_SHOWN_MOVIES)
  );
};

export {extend, getTimeElapsed, getRelatedMovies, validateEmail, validatePassword, getFilteredMovies};
