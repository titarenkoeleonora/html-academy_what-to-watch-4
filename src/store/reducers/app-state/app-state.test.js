import {MAX_SHOWN_MOVIES} from "../constants.js";
import {reducer, initialState} from "./app-state.js";
import {ActionType} from "../../actions/action-types.js";
import {ActionCreator} from "../../actions/action-creator.js";

const testMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`Returns initial state at application start`, ()=>{
  expect(reducer(undefined, {})).toEqual(initialState);
});

it(`Change genre`, ()=>{
  expect(reducer({
    activeGenre: `All genres`,
  }, {
    type: ActionType.ACTIVE_GENRE,
    payload: `All genres`,
  })).toEqual({
    activeGenre: `All genres`,
  });
});

it(`Reducer should show more movie cards by butoon click`, () => {
  expect(reducer({
    shownMoviesCount: MAX_SHOWN_MOVIES,
  }, {
    type: ActionType.SHOW_MORE_MOVIES,
    payload: MAX_SHOWN_MOVIES,
  })).toEqual({
    shownMoviesCount: MAX_SHOWN_MOVIES + MAX_SHOWN_MOVIES,
  });
});

it(`Should change activeMovie`, () => {
  expect(reducer(
      {activeMovie: null},
      {
        type: ActionType.ACTIVE_MOVIE,
        payload: testMovie,
      }
  ))
  .toEqual({
    activeMovie: testMovie,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creators get active genre`, () => {
    expect(ActionCreator.getActiveGenre(`Drama`)).toEqual({
      type: ActionType.ACTIVE_GENRE,
      payload: `Drama`,
    });
  });
  it(`Action creator for showing more movie cards returns correct movie cards number`, () => {
    expect(ActionCreator.showMoreMovies()).toEqual({
      type: ActionType.SHOW_MORE_MOVIES,
      payload: 8,
    });
  });
});
