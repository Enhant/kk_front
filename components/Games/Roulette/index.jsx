import { useState, useEffect, memo, useRef } from 'react';
import { useSelector } from 'react-redux';

import RouletteStyles from './Roulette.module.css';
import Grid from '@mui/material/Grid';

import BetPanel from './components/BetPanel';
import BetsData from './components/BetsData';
import { initialBetsData } from '../../../utils/constants';
import { makeStyles } from '@mui/styles';

import theme from '../../../utils/theme';

import WheelHistory from './components/WheelHistory';
import Alert from 'components/Common/Alert';

import {
  makeSelectUser,
  makeSelectUserToken,
  selectRefreshToken
} from '../../../containers/UserProvider/selectors.js';

import { statuses } from '../../../utils/statuses.js';

import { getRouletteDegrees } from './getRouletteDegrees';

import io from 'socket.io-client';


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentLength = ((1 / 37) * 360) / 2;
function Roulette() {
    const classes = useStyles();
    const [ trasnformWheel, setTransformWheel ] = useState(0);
    const [ timeUntilStart, setTimeUntilStart ] = useState(15);
    const [ betsData, setBetsData ] = useState(initialBetsData);

    const [ isGameStarted, setIsGameStarted ] = useState(false);
    const [ status, setStatus ] = useState(statuses.WAIT_BET);

    const [ winnerNumber, setWinnerNumber ] = useState(1);

    let handleBetEmit = useRef(null);

    const accessToken = useSelector(makeSelectUserToken);
    const refreshToken = useSelector(selectRefreshToken);

    useEffect(() => {
      const socket = io('http://localhost:5000', {
        withCredentials: true,
        extraHeaders: {
          'Access-Control-Allow-Origin': 'http://localhost:5000',  
        },
        query: {
          authorization: 'Bearer ' + accessToken,
          refresh: refreshToken,
        }
      });
      socket.on('status', (data) => {
        data.status && setStatus(data.status);
        data.betsHistory && setBetsData(data.betsHistory);
        data.timer && setTimeUntilStart(data.timer);
      });
      handleBetEmit.current = (betPrice, betColor, betEmail, nameOfBetter) => {
        socket.emit('bet', {
          betPrice,
          nameOfBetter,
          betColor,
          betEmail,
        });
      };
      socket.on('spin', () => {
        setIsGameStarted(true);
        setTimeUntilStart(15);
        spinRoulette();
      });
      socket.on('setWinner', (data) => {
        console.log(data);
        setWinnerNumber(data.winnerNumber);
      });

      // TOO_DO DELETE
      // spinRoulette();
      setTimeout(renderWinnerNumber, 10000);
    }, []);

    const spinRoulette = () => {
        let spinInterval = getRandomInt(30, 40) * 360;
        currentLength += spinInterval;
        setTransformWheel(currentLength);
        setTimeout(renderWinnerNumber, 10000);
    }

    const renderWinnerNumber = () => setTransformWheel(currentLength + getRouletteDegrees(winnerNumber))

    return (
      <>
        <Grid 
          container
          direction="row" 
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid
            
            container


            className={`
              ${RouletteStyles.wheel}
              ${RouletteStyles.spin}
              ${ classes.wheel }
            `}
            alignItems="center"
          >
              <Grid  className={RouletteStyles.arrow}></Grid>
              <Grid  container justifyContent="center">
                <img src="https://i.imgur.com/N01W3Ks.png" style={{ "transform": `rotate(${trasnformWheel}deg)` }}/>
              </Grid>
          </Grid>

          <Grid container justifyContent="center" className={classes.betPanel}>
            <BetPanel 
              handleBetEmit={handleBetEmit}
            />
            <WheelHistory 
              history={[ 
                { backgroundColor: 'black', color: 'white', value: '1' }, 
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
                { backgroundColor: 'black', color: 'white', value: '1' },
              ]}/>
              <BetsData betsData={betsData}/>
          </Grid>
        </Grid>
        <Alert timeUntilStart={timeUntilStart} status={status}/>
      </>
    )
}

const useStyles = makeStyles({
  wheel: {
    marginTop: -80,
    [theme.breakpoints.down('md')]: {
      marginTop: -40,
    },
  },
  betPanel: {
    marginTop: 40,
  },
});

export default memo(Roulette);