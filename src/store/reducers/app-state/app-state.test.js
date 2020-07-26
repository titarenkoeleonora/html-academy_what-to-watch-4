import {reducer, initialState} from './app-state';
import {ActionType} from '../../actions/action-types';
import {ActionCreator} from '../../actions/action-creator';

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
    shownMoviesCount: 8,
  }, {
    type: ActionType.SHOW_MORE_MOVIES,
    payload: 8,
  })).toEqual({
    shownMoviesCount: 16,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for showing more movie cards returns correct movie cards number`, () => {
    expect(ActionCreator.showMoreMovies()).toEqual({
      type: ActionType.SHOW_MORE_MOVIES,
      payload: 8,
    });
  });
});
