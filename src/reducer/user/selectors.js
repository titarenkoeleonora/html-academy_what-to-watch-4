import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getAuthorizationInfo = (state) => state[NameSpace.USER].authorizationInfo;

export const getIsAuthorizing = (state) => state[NameSpace.USER].isAuthorizing;
