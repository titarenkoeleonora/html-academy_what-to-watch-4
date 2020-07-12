import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {getGenresList} from "./utils";

const testMovies = [
  {
    id: `0`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `1`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `2`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `3`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `4`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `5`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `6`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `7`,
    title: `movie title`,
    poster: `image`,
    src: ``,
    genre: `genre`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  }
];

it(`Returns initial state at application start`, ()=>{
  expect(reducer(undefined, {})).toEqual({
    activeGenre: `All genres`,
    movies: testMovies,
    genres: getGenresList(testMovies),
  });
});

it(`Change genre`, ()=>{
  expect(reducer({
    activeGenre: `All genres`,
    movies: testMovies,
    genres: getGenresList(testMovies),
  }, {
    type: ActionType.ACTIVE_GENRE,
    payload: `All genres`,
  })).toEqual({
    activeGenre: `All genres`,
    movies: testMovies,
    genres: getGenresList(testMovies),
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creators change genre`, () => {
    expect(ActionCreator.getActiveGenre(`Drama`)).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: `Drama`,
    });
  });
});
