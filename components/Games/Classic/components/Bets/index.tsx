import { memo, FC, useEffect } from 'react';
import Styles from './Bets.module.css';
import Bet from './Bet';

import theme from '../../../../../utils/theme';
import { makeStyles } from '@mui/styles';
import { IClassicGameData } from 'types';
import Roulette from '../Roulette/Roulette';
import { useSelector } from 'react-redux';
import { makeSelectUser } from 'UserProvider/selectors';


interface IProps {
    betsData: IClassicGameData["gameData"]["players"]
    onStatusChange: () => void,
    itShown: boolean;
    time: number;
}

const Bets: FC<IProps> = ({betsData, onStatusChange, itShown, time}) => {
    const classes = useStyles();
    const name = useSelector(makeSelectUser).name;

    const pricePull: number = Object.values(betsData).reduce( (acc, curr) => acc + curr.bet, 0);

    useEffect( () => {
        if (time === 0) {
            onStatusChange();
        }
    }, [time]);

    return (
        <div className={`${Styles.bets} ${itShown ? Styles.frontSide : Styles.backSide}`}>
            <div className={classes.innerGame}>
                <div className={`${classes.bets} ${classes.cards}`}>
                    {Object.entries(betsData).map(([name, bet]) =>
                        <Bet key={name} name={name} value={bet.bet} width={(bet.bet/pricePull)*100}/>
                    )}
                </div>
                <div className={`${classes.roulette} ${classes.cards}`}>
                    <Roulette time={time} gamersNames={Object.keys(betsData)} name={name}/>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    winPull: {
        border: `1px solid ${theme.palette.primary.light}`,
        padding: 10,
        borderRadius: '10px 0 10px 0'
    },
    time: {
        border: `1px solid ${theme.palette.primary.light}`,
        padding: 10,
        borderRadius: '10px 0 10px 0'
    },
    roulette: {
        transform: 'rotateY(180deg)',
        'backface-visibility': 'hidden',
    },
    bets: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        'backface-visibility': 'hidden'
    },
    innerGame: {
        width: '100%',
    },
    cards: {

    },
});

export default memo(Bets);