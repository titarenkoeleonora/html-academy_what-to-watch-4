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

  isAuthorizing: () => ({
    type: UserActionType.IS_AUTHORIZING,
  }),

  isNotAuthorizing: () => ({
    type: UserActionType.IS_NOT_AUTHORIZING,
  }),
};

export {UserActionCreator};
