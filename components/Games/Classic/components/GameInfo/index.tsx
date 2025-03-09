import Grid from '@mui/material/Grid';

import {makeStyles} from '@mui/styles';

import Bets from '../Bets';
import { IClassicGameData, TGameModes } from 'types';
import { statuses } from '../../namespace';

interface IProps {
    data: IClassicGameData["gameData"];
    time: number;
    status: statuses;
    betLevel: TGameModes;
    setStatus: () => void;
}
const GameInfo: React.FC<IProps> = ({time, data, status, setStatus}) => {
    const gemIcon = require('@icons/gem.svg');
    const classes = useStyles();

    return (
        <>
            <Grid container justify="space-between" alignItems="center">
                <Grid item container 
                    justify="space-between" 
                    className={classes.gain} 
                    md={6} xs={12}
                    alignItems="center"
                >
                    <Grid item>Выигрыш</Grid> 
                    <Grid item>{data.win}<img src={gemIcon}/></Grid> 
                </Grid>                
            </Grid>

            <Grid className={classes.bets}>
                <Bets
                    betsData={data.players}
                    onStatusChange={setStatus}
                    itShown={status === statuses.bets}
                    time={time}
                />
            </Grid>
        </>
    );
}

const useStyles = makeStyles({
    timeToStart: {
        fontWeight: 500,
        fontSize: 18,
        color: '#1EFFFF',
        textAlign: 'right',
    },
    time: {
        fontWeight: 300,
        fontSize: 33,
        color: '#FFFFFF',
        fontFamily: "Montserrat"
    },
    gain: {
        border: '0.5px solid rgba(30, 255, 255, 0.5)',
        boxSizing: 'border-box',
        borderRadius: 5,
        color: 'white',
        fontSize: 25,
        "& > div:nth-child(2)": {
            fontSize: 29,
            lineHeight: '45px',
            "& > img": {
                width: 20,
            }
        },
        padding: "5px 10px"
    },
    bets: {
        marginTop: 33,
        marginLeft: -10,
    },
    winner: {
        "& p": {
            width: 30,
            height: 30
        }
    }
});

export default GameInfo;
