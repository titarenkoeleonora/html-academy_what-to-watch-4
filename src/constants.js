const emptyMovie = {
  id: `Is loading...`,
  title: ``,
  poster: ``,
  previewImage: ``,
  bgImage: ``,
  backgroundColor: ``,
  src: ``,
  previewVideoLink: ``,
  description: ``,
  rating: ``,
  votes: ``,
  director: ``,
  starring: ``,
  runTime: ``,
  genre: ``,
  date: ``,
  isFavorite: ``,
};

const MovieTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const MAX_SHOWN_MOVIES = 8;

const API_TIMEOUT = 5000;

export {emptyMovie, MovieTabs, MAX_SHOWN_MOVIES, API_TIMEOUT};
