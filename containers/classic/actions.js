import CLASSIC_ACTIONS from './constants';
import createActions from 'utils/createActions';

export const getWinnerAction = () => {
    return {
        type: CLASSIC_ACTIONS.FETCH.CALL
    }
}

export const getWinnerSuccessAction = () => {
    return {
        type: CLASSIC_ACTIONS.FETCH.SUCCESS
    }
}

export const getWinnerFailAction = () => {
    return {
        type: CLASSIC_ACTIONS.FETCH.FAIL
    }
}

export const betAction = (gameType) => {
    return {
        type: CLASSIC_ACTIONS.BET.CALL,
        payload: {
            gameType
        }
    }
}

export const betSuccessAction = (gameType, betPrice, name) => {
    return {
        type: CLASSIC_ACTIONS.BET.SUCCESS,
        payload: {
            gameType,
            betPrice,
            name
        }
    }
}

export const betFailAction = () => {
    return {
        type: CLASSIC_ACTIONS.BET.FAIL
    }
}

export const {
    call: winAction,
    success: winSuccessAction,
    fail: winFailAction
} = createActions(
    CLASSIC_ACTIONS.WIN, 
    (name, winPrice) => ({
        name,
        winPrice
    }),
    (name) => ({
        name
    }),
    () => null
);

export const changeGameModeLevel = (status) => ({
    type: CLASSIC_ACTIONS.CHANGE_GAME_MODE.CALL,
    payload: {
        status
    }
})

export const timerAction = (gameType) => ({
    type: CLASSIC_ACTIONS.TIMER.CALL,
    payload: {
        gameType
    }
});

export const changeGameStatus = (betLevel) => ({
    type: CLASSIC_ACTIONS.CHANGE_GAME_STATUS.CALL,
    payload: {
        betLevel
    }
});

export const changeRestartTime = (betLevel) => ({
    type: CLASSIC_ACTIONS.GAME_RESTART_TIMER.CALL,
    payload: {
        betLevel,
        
    }
});

