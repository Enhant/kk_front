import { combineReducers } from "redux";

import userReducer from '../containers/UserProvider/reducer'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    user: userReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
