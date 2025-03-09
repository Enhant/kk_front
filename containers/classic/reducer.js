import produce from 'immer';
import CLASSIC_ACTIONS from './constants';

const getInitialData = (ticketPrice) => ({
    gameData: {
      players: {
        'Соперник': {
          bet: 100,
        },
      },
      win: 100,
      winnerName: ''
    },
    gamerData: {
      myBet: 0,
      ticketPrice,
      chanceOnWin: 0
    },
    time: 10,
    status: 0,
    restartTime: 10,
});

export const initialState = {
    fastGameData: {
      ...getInitialData(5)
    },
    easyGameData: {
      ...getInitialData(25)
    },
    vipGameData: {
      ...getInitialData(50)
    },
    isLoading: false,
    currentGameMode: 'fastGameData',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLASSIC_ACTIONS.FETCH.CALL:
        draft.isLoading = true;
        break;
      case CLASSIC_ACTIONS.FETCH.FAIL:
        draft.isLoading = false;
        break;
      case CLASSIC_ACTIONS.FETCH.SUCCESS:
        draft.isLoading = false;
        break;
      case CLASSIC_ACTIONS.BET.SUCCESS:
        const { gameType, name } = action.payload;
        const betPrice = state[gameType].gamerData.ticketPrice;
        draft[gameType].gameData.players[name] = {
          bet: (state[gameType].gameData.players[name]?.bet || 0) + betPrice
        }
        draft[gameType].gameData.win += betPrice;
        draft[gameType].gamerData.myBet += betPrice;
        draft[gameType].gamerData.chanceOnWin = Number(
          ((state[gameType].gamerData.myBet+betPrice) * 100) / (state[gameType].gameData.win+betPrice)
        ).toFixed(0);
        break;
      case CLASSIC_ACTIONS.CHANGE_GAME_MODE.CALL:
        draft.currentGameMode = action.payload.status;
        break;
      case CLASSIC_ACTIONS.TIMER.CALL:
        draft[action.payload.gameType].time -= 1;
        break;
      case CLASSIC_ACTIONS.WIN.SUCCESS:
        draft[state.currentGameMode].gameData.winnerName = action.payload.name; 
        break;
      case CLASSIC_ACTIONS.CHANGE_GAME_STATUS.CALL:
        draft[action.payload.betLevel].status = Number(!state[action.payload.betLevel].status);
        break;
      case CLASSIC_ACTIONS.GAME_RESTART_TIMER.CALL:
        if (state[action.payload.betLevel].restartTime < 1) {
          draft[action.payload.betLevel].restartTime--;
        } else {
          draft[action.payload.betLevel].restartTime = 10;
        }        
        break;
      }
  });

export default reducer;
