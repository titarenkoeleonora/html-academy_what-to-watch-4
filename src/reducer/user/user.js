import {UserActionCreator} from "../actions/user-action-creator";
import {UserActionType} from "../actions/user-action-type";
import {extend} from "../../utils";
import createUserInfo from "../../adapter/user";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isAuthorizing: false,
  authorizationInfo: {
    id: 0,
    email: ``,
    name: ``,
    avatar: ``,
  }};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(UserActionCreator.loadAuthorizationInfo(createUserInfo(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(UserActionCreator.loadAuthorizationInfo(createUserInfo(response.data)));
        dispatch(UserActionCreator.isNotAuthorizing());
      })
      .catch(() => {
        dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case UserActionType.AUTHORIZATION_INFO:
      return extend(state, {
        authorizationInfo: action.payload
      });
    case UserActionType.IS_AUTHORIZING:
      return extend(state, {
        isAuthorizing: true,
      });
    case UserActionType.IS_NOT_AUTHORIZING:
      return extend(state, {
        isAuthorizing: false,
      });
  }

  return state;
};

export {reducer, initialState, AuthorizationStatus, Operation};
