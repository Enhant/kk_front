import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

import theme from '../../../utils/theme';

import { statuses } from '../../../utils/statuses.js';


const getAlertText = (status, timeUntilStart) => {
  switch(status) {
    case statuses.WAIT_BET:
      return 'Делайте ваши ставки, господа';
    case statuses.BET_TIME:
      return `До игры ${timeUntilStart} секунд`;
    case statuses.GAME_STARTED:
      return 'Игра';
    default: 
      return 'Игра закончилась';
  }
}

const Alert = ({ timeUntilStart, status = '' }) => {
    const classes = useStyles();

    let alertText = getAlertText(status, timeUntilStart);

    return (
        <Paper className={classes.alert}>
          {alertText}
        </Paper>
    );
}

const useStyles = makeStyles({
    alert: {
      padding: '15px 10px',
      position: 'fixed',
      bottom: 10,
      background: theme.palette.background.paper,
      width: 300,
      color: 'white',
      lineHeight: 1.5,
      fontSize: 20,
      opacity: 0.8,
      textAlign: 'center',
      margin: '0 auto',
      borderRadius: 10,
      left: 'calc(50vw - 150px)',
    }
  });

export default Alert;
