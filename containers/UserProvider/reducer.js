import produce from 'immer';
import { USER_ACTIONS } from './constants';

import {IAction} from 'types';

let userFromLocalStorage;

try {
  const userData = JSON.parse(localStorage.getItem('auth_data') || '');
  userFromLocalStorage = userData || {};
} catch (e) {
  userFromLocalStorage = {};
}

export const initialState = {
  user: {
    accessToken: userFromLocalStorage.access_token,
    refreshToken: userFromLocalStorage.refresh_token,
    email: '',
    name: '',
    balance: 0
  },
  isAuthorized: false,
  authFail: false,
  isProgress: false,
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_ACTIONS.AUTH.SUCCESS:
        console.log(action);
        if (action.payload?.user) {
          localStorage.setItem('auth_data', JSON.stringify({
            access_token: action.payload.user.accessToken,
            refresh_token: action.payload.user.refreshToken,
          }));
          draft.user = action.payload.user;
        } 
        draft.isProgress = false;
        draft.authFail = false;
        draft.isAuthorized = true;
        break;
      case USER_ACTIONS.ERROR.CALL:
        draft.error = action.payload.error;
        draft.isProgress = false;
        draft.authFail = true;
        draft.isAuthorized = false;
        break;
      case USER_ACTIONS.AUTH.CALL:
        draft.isProgress = true;
        draft.authFail = false;
        break;
      case USER_ACTIONS.CHECK_TOKEN.CALL:
        draft.isProgress = true;
        draft.authFail = false;
        break;
      case USER_ACTIONS.LOGOUT.CALL:
        draft.user = { ...state.user, token: undefined };
        draft.authFail = false;
        draft.isAuthorized = false;
        draft.isProgress = false;
        localStorage.removeItem('auth_data');
        break;
      case USER_ACTIONS.ENTER_MONEY.SUCCESS:
        draft.user.balance = action.payload.price;
        break;
      case USER_ACTIONS.WITHDRAW_MONEY.SUCCESS:
        draft.user.balance = action.payload.price;
        break;
      default:
        return state;
    }
  });

export default reducer;
