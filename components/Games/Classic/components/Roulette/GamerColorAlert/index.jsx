import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/material';

import theme from 'themeStore';
import rnc from 'randomcolor';


const GamerColorAlert = ({name}) => {
    const classes = useStyles();
    const color = rnc({
        seed: name,
        luminosity: 'dark'
    })
    return (
        <Paper className={classes.alert}>
          Вы мистер <span style={{ background: color }} className={classes.circle}>{color}</span>
        </Paper>
    );
}

const useStyles = makeStyles({
    alert: {
      padding: '15px 10px',
      position: 'fixed',
      top: '-20vh',
      background: theme.palette.background.paper,
      width: 350,
      color: 'white',
      lineHeight: 1.5,
      fontSize: 20,
      opacity: 1,
      textAlign: 'center',
      margin: '0 auto',
      borderRadius: 10,
    },
    circle: {}
});

export default GamerColorAlert;
