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

export {extend, getGenresList, fiterMoviesByGenre};
