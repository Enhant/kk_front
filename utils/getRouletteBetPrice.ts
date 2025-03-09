import { TGameModes } from './types';


export default function getRouletteBetPrice(type: TGameModes) {
    if (type === 'fastGameData') {
        return 5;
    }

    if (type === 'easyGameData') {
        return 25;
    }
    
    if (type === 'vipGameData') {
        return 50;
    }

    throw new Error(`Нет такого roulette game mode: ${type}`);
}