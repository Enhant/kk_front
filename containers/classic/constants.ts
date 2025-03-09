import createNamespace from 'Redux/actionsTypeGenerator';

const CLASSIC_ACTIONS = createNamespace(
    [
        "FETCH",
        "BET", 
        "WIN", 
        "CHANGE_GAME_MODE", 
        "TIMER",
        "CHANGE_GAME_STATUS",
        "GAME_RESTART_TIMER",
    ],
    'CLASSIC_ACTIONS');

export default CLASSIC_ACTIONS;
