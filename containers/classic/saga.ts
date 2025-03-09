import { put, select, takeEvery, delay } from 'redux-saga/effects';
import { IAction, IGetOption, IPostOption, TGameModes } from 'types';
import CLASSIC_ACTIONS from './constants';
import { 
  getWinnerSuccessAction, 
  getWinnerFailAction,
  betSuccessAction,
  betFailAction,
  winSuccessAction
} from './actions';

import {
  enterMoneySuccessAction
} from 'UserProvider/actions';

import { spendMoneyAction } from 'UserProvider/actions';
import getRouletteBetPrice from 'utils/getRouletteBetPrice';


export function* getWinnerSaga() {
  const requestUrl = `/getWinner`;
  const options: IGetOption = {
    method: 'get',
    mode: 'cors',
    headers: { token: '' },
  };

  try {
    yield fetch(requestUrl, options);
    yield delay(500)
    yield put(getWinnerSuccessAction())
  } catch (err) {
    yield put(getWinnerFailAction())
  }
}

export function* betSaga(action: IAction<{ gameType: TGameModes }>) {
  const { gameType } = action.payload
  const requestUrl = `/bet?type=${gameType}`;
  const options: IGetOption = {
    method: 'get',
    mode: 'cors',
    headers: { token: '' },
  };

  try {
    yield fetch(requestUrl, options);
    yield delay(500)
    // @ts-ignore
    const username = yield select( state => state.user.user.name );
    yield put(betSuccessAction(gameType, getRouletteBetPrice(gameType), username))
    yield put(spendMoneyAction(getRouletteBetPrice(gameType)));
  } catch (err) {
    console.log(err);
    yield put(betFailAction())
  }
}

export function* winSaga({ payload }: IAction<{ name: string, winPrice: number }>) {
  const requestUrl = '/win';
  const { name, winPrice } = payload;
  const options: IPostOption<string> = {
    method: 'post',
    mode: 'cors',
    headers: { token: '' },
    body: JSON.stringify({
      name,
      winPrice 
    })
  };

  try {
    yield fetch(requestUrl, options);
    yield delay(500);
    yield put( enterMoneySuccessAction(String(winPrice)) );
    yield put( winSuccessAction(name) );
  } catch(err) {
    console.error(err);
  }
}

export default function* userProfileSaga() {
  // @ts-ignore
  yield takeEvery(CLASSIC_ACTIONS.FETCH.CALL, getWinnerSaga);
  // @ts-ignore
  yield takeEvery(CLASSIC_ACTIONS.BET.CALL, betSaga);
  // @ts-ignore
  yield takeEvery(CLASSIC_ACTIONS.WIN.CALL, winSaga);
}
