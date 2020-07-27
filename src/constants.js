const emptyMovie = {
  id: 0,
  title: `Is loading...`,
  poster: ``,
  previewImage: ``,
  bgImage: ``,
  backgroundColor: ``,
  src: ``,
  previewVideoLink: ``,
  description: ``,
  rating: ``,
  votes: 0,
  director: ``,
  starring: [],
  runTime: ``,
  genre: ``,
  date: 0,
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
