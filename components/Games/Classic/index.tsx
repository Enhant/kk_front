import { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeSelectUser } from 'UserProvider/selectors';

import BetPanel from './components/BetPanel';

import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/styles';

import GameInfo from './components/GameInfo';

import theme from '../../../utils/theme';

import History from '../../Common/History';

import Alert from 'components/Common/Alert';


import { IClassic, TGameModes } from 'types';
import { selectCurrentGameMode, selectTimeForGameMode, getGameModeStatuses } from 'containers/classic/selectors';
import { changeGameModeLevel, timerAction, changeGameStatus } from 'containers/classic/actions';


const mockHistory = [
  { name: 'Game 1', gain: 500, chance: '25%' },
  { name: 'Game 2', gain: 500, chance: '25%' },
  { name: 'Game 3', gain: 500, chance: '25%' },
  { name: 'Game 4', gain: 500, chance: '25%' },
  { name: 'Game 5', gain: 500, chance: '25%' },
  { name: 'Game 6', gain: 500, chance: '25%' },
  { name: 'Game 7', gain: 500, chance: '25%' },
  { name: 'Game 8', gain: 500, chance: '25%' },
]
interface IProps {
  data: IClassic, 
  makeBet: ((gameType: TGameModes) => () => void),
}

function Classic({ data, makeBet }: IProps) {
    const classes = useStyles();

    const betLevel: TGameModes = useSelector( selectCurrentGameMode );

    const timeToStart: number = useSelector(selectTimeForGameMode(betLevel));

    const statuses = useSelector(getGameModeStatuses);
    
    const dispatch = useDispatch();

    const setStatuses = (betLevel: string) => () => dispatch(changeGameStatus(betLevel));

    const handleChangeBetLevel = ( newBetLevel: TGameModes ) => () => dispatch(changeGameModeLevel(newBetLevel));

    const currentGameInfo = data[betLevel].gameData;

    const username = useSelector(makeSelectUser).name;

    const [timerStart, setTimerStart] = useState(false);
    useEffect( () => {
      if (Object.keys(currentGameInfo.players).length > 1) {
        setTimerStart(true);
        !timerStart && timeToStart > 0 && setTimeout(() => {
          setTimerStart(false);
          dispatch(timerAction(betLevel));
        }, 1000);
      }
    }, [timeToStart, currentGameInfo.players]);

    return (
      <Grid container justify="space-between">
        <Grid item md={12} lg={5} className={classes.betPanel}>
          <BetPanel
            betLevel={betLevel}
            onChangeBetLevel={handleChangeBetLevel}
            gameData={data}
            makeBet={makeBet}
            status={statuses[betLevel]}
            name={username}
            hasPlayerInGame={currentGameInfo.players.hasOwnProperty(username)}
          />
        </Grid>

        <Grid item className={classes.game} md={12} lg={6}> 
          <GameInfo 
            data={currentGameInfo}
            time={timeToStart}
            status={statuses[betLevel]}
            setStatus={setStatuses(betLevel)}
            betLevel={betLevel}
          />
        </Grid>

        <Grid
          item md={12} lg={7}
          className={classes.historyContainer}
        > 
          <History history={mockHistory}/>
        </Grid>

        <Alert timeUntilStart={timeToStart} />
      </Grid>
    )
}

const useStyles = makeStyles({
  game: {
    background: 'rgba(85, 28, 139, 0.8)',
    borderRadius: 5,
    width: '100%',
    padding: '29px 35px 23px',
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
    }
  },
  betPanel: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      marginTop: 50,
    }
  },
  historyContainer: {
    margin: 'auto',
  }
})

export default memo(Classic);
