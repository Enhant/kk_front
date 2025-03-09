import { put, takeEvery, select, call, takeLatest } from 'redux-saga/effects';
import { makeSelectUserToken, selectRefreshToken } from './selectors';
import { USER_ACTIONS } from './constants';

import {
    enterMoneySuccessAction,
    errorAction, authorizeAction,
    authorizeSuccessAction,
    withdrawMoneySuccessAction
} from './actions';
import request from '../../utils/request';

export default function* () {
    yield takeLatest(USER_ACTIONS.AUTH.CALL, loginUserSaga);
    yield takeLatest(USER_ACTIONS.REGISTER.CALL, registerUserSaga);
    yield takeLatest(USER_ACTIONS.CHECK_TOKEN.CALL, checkTokenSaga);
    yield takeLatest(USER_ACTIONS.ENTER_MONEY.CALL, enterMoneySaga);
    yield takeLatest(USER_ACTIONS.WITHDRAW_MONEY.CALL, withdrawMoneySaga);    
    yield takeLatest(USER_ACTIONS.LOGOUT.CALL, logoutSaga);
}

function* loginUserSaga(action) {
    const requestURL = `http://localhost:5000/api/auth/login`;
    const options = {
        method: 'post',
        mode: 'cors',
        credentials:'same-origin',
        cache:'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.payload),
    };

    try {
        const user = yield call(request, requestURL, options);
        console.log(user);
        yield put(authorizeSuccessAction(user));        
    } catch (e) {
        yield put(errorAction(e.error));
    }
}

function* registerUserSaga(action) {
    const requestURL = `http://localhost:5000/api/auth/register`;
    const options = {
        method: 'post',
        mode: 'cors',
        credentials:'same-origin',
        cache:'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.payload),
    };

    try {
        const user = yield call(request, requestURL, options);
        yield put(authorizeSuccessAction(user));
    } catch (e) {
        if (e.toString() === 'TypeError: Failed to fetch') {
            yield put(errorAction('Кажется, нас атаковали'));
        } else {
            yield put(errorAction(e.error));
        }
    }
}

function* checkTokenSaga(action) {
    const accessToken = yield action.payload.token || select(makeSelectUserToken);
    const refreshToken = yield select(selectRefreshToken);
    const requestURL = `http://localhost:5000/api/auth/index/me`;

    const options = {
        method: 'get',
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: { authorization: 'Bearer ' + accessToken, refresh: refreshToken },
    };

    try {
        const user = yield call(request, requestURL, options);
        yield put(authorizeSuccessAction(user));
    } catch (err) {
        yield put(errorAction(err.error ? err.error : err));
    }
}

function* logoutSaga(action) {
    const requestURL = `http://localhost:5000/api/auth/refresh_token`;

    const options = {
        method: 'delete',
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'no-cache',
    };

    try {
        yield call(request, requestURL, options);
    } catch (err) {
        yield put(errorAction(err.error ? err.error : err));
    }
    
}

function* enterMoneySaga(action) {
    const accessToken = yield action.payload.token || select(makeSelectUserToken);
    const refreshToken = yield select(selectRefreshToken);
    const requestURL = `http://localhost:5000/api/money/refill`;
    const options = {
        method: 'post',
        mode: 'cors',
        headers: {
            authorization: 'Bearer ' + accessToken,
            refresh: refreshToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            moneyToRefill: action.payload.price,
        }),
    };

    try {
        const res = yield call(request, requestURL, options);
        yield put(enterMoneySuccessAction(res.balance));
    } catch (e) {
        yield put(errorAction(e));
    }
}

function* withdrawMoneySaga(action) {
    const accessToken = yield action.payload.token || select(makeSelectUserToken);
    const refreshToken = yield select(selectRefreshToken);
    const requestURL = `http://localhost:5000/api/money/withdrawal`;
    const options = {
        method: 'post',
        mode: 'cors',
        headers: {
            authorization: 'Bearer ' + accessToken,
            refresh: refreshToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            moneyToWithdrawal: action.payload.price,
        }),
    };

    try {
        console.log(action);
        const res = yield call(request, requestURL, options);
        console.log(res);
        yield put(withdrawMoneySuccessAction(res.balance));
    } catch (e) {
        yield put(errorAction(e));
    }
}
