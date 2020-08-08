import {reducer, initialState} from "./app-state.js";
import {MAX_SHOWN_MOVIES, ALL_GENRES_GENRE} from "../../constants.js";
import {AppStateActionType} from "../actions/app-state-action-types.js";
import {AppStateActionCreator} from "../actions/app-state-action-creator.js";

const testMovie = {
  id: 0,
  title: `Movie title`,
  poster: ``,
  previewImage: ``,
  bgImage: ``,
  backgroundColor: ``,
  src: ``,
  previewVideoLink: ``,
  description: ``,
  rating: 8.2,
  votes: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  runTime: 99,
  genre: `Genre`,
  date: 2020,
  isFavorite: true,
};

it(`Returns initial state at application start`, ()=>{
  expect(reducer(undefined, {})).toEqual(initialState);
});

it(`Change genre`, ()=>{
  expect(reducer({
    activeGenre: ALL_GENRES_GENRE,
  }, {
    type: AppStateActionType.ACTIVE_GENRE,
    payload: ALL_GENRES_GENRE,
  })).toEqual({
    activeGenre: ALL_GENRES_GENRE,
  });
});

it(`Reducer should show more movie cards by butoon click`, () => {
  expect(reducer({
    shownMoviesCount: MAX_SHOWN_MOVIES,
  }, {
    type: AppStateActionType.SHOW_MORE_MOVIES,
    payload: MAX_SHOWN_MOVIES,
  })).toEqual({
    shownMoviesCount: MAX_SHOWN_MOVIES + MAX_SHOWN_MOVIES,
  });
});

it(`Reducer should reset shown movies count`, () => {
  expect(reducer({
    shownMoviesCount: 16,
  }, {
    type: AppStateActionType.RESET_SHOW_MORE_MOVIES,
    payload: 8,
  })).toEqual({
    shownMoviesCount: 8,
  });
});

it(`Should change activeMovie`, () => {
  expect(reducer(
      {activeMovie: null},
      {
        type: AppStateActionType.ACTIVE_MOVIE,
        payload: testMovie,
      }
  ))
  .toEqual({
    activeMovie: testMovie,
  });
});

it(`Should activate movie videoplayer`, () => {
  expect(reducer(
      {isMovieVideoplayerActive: false},
      {
        type: AppStateActionType.ACTIVATE_MOVIE_VIDEOPLAYER,
        payload: true,
      }
  ))
  .toEqual({
    isMovieVideoplayerActive: true,
  });
});

it(`Should add review`, () => {
  expect(reducer(
      {isReviewOpen: false},
      {
        type: AppStateActionType.ADD_REVIEW,
        payload: true,
      }
  ))
  .toEqual({
    isReviewOpen: true,
  });
});

it(`Should toggle form state`, () => {
  expect(reducer(
      {isFormDisabled: false},
      {
        type: AppStateActionType.TOGGLE_FORM_STATE,
        payload: true,
      }
  ))
  .toEqual({
    isFormDisabled: true,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creators get active genre`, () => {
    expect(AppStateActionCreator.getActiveGenre(`Drama`)).toEqual({
      type: AppStateActionType.ACTIVE_GENRE,
      payload: `Drama`,
    });
  });
  it(`Action creator for showing more movie cards returns correct movie cards number`, () => {
    expect(AppStateActionCreator.showMoreMovies()).toEqual({
      type: AppStateActionType.SHOW_MORE_MOVIES,
      payload: 8,
    });
  });
});
