import { combineReducers } from "redux";

import userReducer from "UserProvider/reducer.js";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
