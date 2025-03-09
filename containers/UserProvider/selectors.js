import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { UserContainer } from './constants';

const selectUser = state => state['user'] || initialState;

const makeSelectUser = (store) => selectUser(store).user; 

const makeSelectUserToken = (store) => selectUser(store).user?.accessToken; 

const makeSelectUserIsAuthorized = (store) => selectUser(store).isAuthorized; 

const selectError = store => store['user'].error;

export const selectRefreshToken = (store) => selectUser(store).user.refreshToken; 

export {
  selectUser,
  makeSelectUser,
  makeSelectUserToken,
  makeSelectUserIsAuthorized,
  selectError,
};
