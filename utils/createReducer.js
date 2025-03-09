import { combineReducers } from 'redux';
import userReducer from 'UserProvider/reducer'

function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        user: userReducer,
        ...injectedReducers,
    });

    return rootReducer
}

export default createReducer;
