import MockAdapter from 'axios-mock-adapter';
import {reducer, AuthorizationStatus, Operation} from './user';
import {UserActionType} from '../actions/user-action-type';
import {UserActionCreator} from '../actions/user-action-creator';
import {initialState} from '../user/user';

import {createAPI} from '../../api';


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: UserActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: UserActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: UserActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: UserActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should get user data`, () => {
  expect(reducer({
    authorizationInfo: {
      id: 0,
      email: ``,
      name: ``,
      avatar: ``,
    },
  }, {
    type: UserActionType.AUTHORIZATION_INFO,
    payload: {
      id: 1,
      email: `asdasda@sfdsf.ru`,
      name: `asdasda`,
      avatar: `wtw/sfdsf.ru`,
    },
  })).toEqual({
    authorizationInfo: {
      id: 1,
      email: `asdasda@sfdsf.ru`,
      name: `asdasda`,
      avatar: `wtw/sfdsf.ru`,
    },
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: UserActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: UserActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });
});

describe(`Operations work correctly`, () => {
  it(`Operation should check authorization`, () => {
    const api = createAPI(() => {});

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthorization(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith({
              type: UserActionType.REQUIRED_AUTHORIZATION,
              payload: `AUTH`,
            });
          });
  });
});
