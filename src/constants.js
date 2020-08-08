export const EmptyMovie = {
  id: 0,
  title: `Is loading...`,
  poster: ``,
  previewImage: ``,
  bgImage: ``,
  backgroundColor: ``,
  src: ``,
  previewVideoLink: ``,
  description: ``,
  rating: 0,
  votes: 0,
  director: ``,
  starring: [],
  runTime: 0,
  genre: ``,
  date: 0,
  isFavorite: false,
};

export const MovieTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const ALL_GENRES_GENRE = `All genres`;

export const MAX_SHOWN_MOVIES = 8;

export const MAX_RELATED_MOVIES_COUNT = 4;

export const API_TIMEOUT = 5000;

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films`,
  PLAYER: `/player`,
};

export const Review = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 400,
};

export const RATING = 5;

export const Rating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const Score = {
  BAD: 3,
  NORMAL: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

export const SubmitStatus = {
  DEFAULT: `Default`,
  SUCCESS: `Success`,
  ERROR: `Error`,
};

export const FormatRule = {
  DATE: `MMMM DD, YYYY`,
  DATE_HIDE: `YYYY-MM-DD`,
};
