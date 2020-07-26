import {reducer, initialState} from './data';
import {ActionType} from '../../actions/action-types';
import {ActionCreator} from '../../actions/action-creator';

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
});
