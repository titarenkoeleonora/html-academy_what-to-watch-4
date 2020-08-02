import {UserActionType} from "./user-action-type";

const UserActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: UserActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  loadAuthorizationInfo: (info) => {
    return {
      type: UserActionType.AUTHORIZATION_INFO,
      payload: info
    };
  },

  isAuthorizing: (bool) => ({
    type: UserActionType.IS_AUTHORIZING,
    payload: bool,
  }),
};

export {UserActionCreator};
