import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as appState} from "./app-state/app-state";
import {reducer as user} from "./user/user.js";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
});
