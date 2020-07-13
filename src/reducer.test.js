import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {getGenresList} from "./utils";

const testMovies = [
  {
    id: `The Grand Budapest Hotel0`,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    date: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `8,9`,
    ratingDescription: `Very good`,
    votes: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
    runTime: `1h 39m`,
  },
  {
    id: `Fantastic Beasts: The Crimes of Grindelwald1`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Fantasy`,
    date: 2018,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `9,9`,
    ratingDescription: `Very good`,
    votes: 440,
    director: `David Yates`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`, `Alison Sudol`, `Ezra Miller`, `Zoë Kravitz`, `Callum Turner`, `Claudia Kim`, `William Nadylam`, `Kevin Guthrie`, `Jude Law`, `Johnny Depp`],
    runTime: `2h 14m`,
  },
  {
    id: `Bohemian Rhapsody2`,
    title: `Bohemian Rhapsod`,
    genre: `Drama`,
    date: 2019,
    poster: `img/bohemian-rhapsody.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `9,5`,
    ratingDescription: `Very good`,
    votes: 650,
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`],
    runTime: `2h 14m`,
  },
  {
    id: `Macbeth3`,
    title: `Macbeth`,
    genre: `Tragedy`,
    date: 2015,
    poster: `img/macbeth.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `5,0`,
    ratingDescription: `Bad`,
    votes: 150,
    director: `Macbeth`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`],
    runTime: `1h 53m`,
  },
  {
    id: `Aviator4`,
    title: `Aviator`,
    genre: `Drama`,
    date: 2004,
    poster: `img/aviator.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `7,9`,
    ratingDescription: `Good`,
    votes: 150,
    director: `Macbeth`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`],
    runTime: `1h 53m`,
  },
  {
    id: `Seven Years in Tibet5`,
    title: `Seven Years in Tibet`,
    genre: `Drama`,
    date: 1997,
    poster: `img/seven-years-in-tibet.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `6,5`,
    ratingDescription: `Bad`,
    votes: 150,
    director: `Macbeth`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`],
    runTime: `1h 53m`,
  },
  {
    id: `Shutter Island6`,
    title: `Shutter Island`,
    genre: `Thriller`,
    date: 2010,
    poster: `img/shutter-island.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `7,6`,
    ratingDescription: `Not bad`,
    votes: 150,
    director: `Macbeth`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`],
    runTime: `1h 53m`,
  },
  {
    id: `Pulp Fiction7`,
    title: `Pulp Fiction`,
    genre: `Comedy`,
    date: 1994,
    poster: `img/pulp-fiction.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: `9,1`,
    ratingDescription: `Very good`,
    votes: 150,
    director: `Macbeth`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`, `Ben Hardy`, `Joe Mazzello`, `Aidan Gillen`, `Allen Leech`],
    runTime: `1h 53m`,
  },
];

it(`Returns initial state at application start`, ()=>{
  expect(reducer(undefined, {})).toEqual({
    activeGenre: `All genres`,
    movies: testMovies,
  });
});

it(`Change genre`, ()=>{
  expect(reducer({
    activeGenre: `All genres`,
    movies: testMovies,
  }, {
    type: ActionType.ACTIVE_GENRE,
    payload: `All genres`,
  })).toEqual({
    activeGenre: `All genres`,
    movies: testMovies,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creators change genre`, () => {
    expect(ActionCreator.getActiveGenre(`Drama`)).toEqual({
      type: ActionType.ACTIVE_GENRE,
      payload: `Drama`,
    });
  });
});
