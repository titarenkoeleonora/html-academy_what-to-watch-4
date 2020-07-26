const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getGenresList = (movies) => {
  return [`All genres`, ...new Set(movies.map((movie) => movie.genre))];
};

const fiterMoviesByGenre = (activeGenre, movies) => {
  if (activeGenre === `All genres`) {
    return movies;
  } else {
    return movies.filter((movie) => movie.genre === activeGenre);
  }
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

export {extend, getGenresList, fiterMoviesByGenre, getTimeElapsed};
