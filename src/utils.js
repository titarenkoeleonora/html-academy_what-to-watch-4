const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getGenresList = (movies) => {
  return [`All genres`, ...new Set(movies.map((movie) => movie.genre))];
};

export {extend, getGenresList};
