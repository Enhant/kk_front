export const getReducerData = (store) => store.classic;

export const selectGameModeData = (store, gameMode) => getReducerData(store)[gameMode];

export const selectCurrentGameMode = (store) => getReducerData(store).currentGameMode;

export const selectTimeForGameMode = (gameMode) => (store) => selectGameModeData(store, gameMode).time;

export const getWinnerName = (store) => getReducerData(store)[selectCurrentGameMode(store)].gameData.winnerName; 


export const getGameModeStatuses = (store) => {
    const classicData = getReducerData(store);

    return {
      fastGameData: classicData.fastGameData.status,
      easyGameData: classicData.easyGameData.status,
      vipGameData: classicData.vipGameData.status,
    };
};

export const getGameModeRestartTimers = (store) => {
    const classicData = getReducerData(store);

    return {
      fastGameData: classicData.fastGameData.restartTime,
      easyGameData: classicData.easyGameData.restartTime,
      vipGameData: classicData.vipGameData.restartTime,
    };
};

