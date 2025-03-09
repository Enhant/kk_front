import rnc from 'randomcolor';
import Styles from './Bet.module.css';

import { makeStyles } from '@mui/styles';
import theme from '../../../../../../utils/theme';

import Grid from '@mui/material/Grid';
import Gem from '@icons/gem.svg';

interface IProps {
    name: string
    value: number
    width: number
    image?: string
}

const Bet : React.FC<IProps> = ({width, name, value}) => {
    const classes = useStyles();
    const percent = `${width.toFixed(0)}%`;
    return (
        <Grid className={`${Styles.bet} ${classes.bet}`} style={{width: percent, 
            background: `linear-gradient(${rnc({
                    seed: name,
                    luminosity: 'light'
                })},${rnc({
                    seed: name,
                    luminosity: 'dark'
                })})`}}
            container
            direction="column"
            justify="space-between"
        >
            <Grid container direction="row">
                <Grid item container direction="column" className={classes.betData}>
                  <Grid item className={classes.betName}>{name}</Grid>
                  <Grid item className={classes.betValue}>{value}<img src={Gem} alt="gem" style={{ width: 12 }}/></Grid>

                </Grid>
            </Grid> 
            <Grid className={classes.percent}>{percent}</Grid>
        </Grid>
    )
}

const useStyles = makeStyles({
    bet: {
        boxShadow: `0 0 2.5px ${theme.palette.primary.light}, 
        0 0 5px ${theme.palette.primary.light},
        0 0 10px ${theme.palette.primary.light}`,
        height: 108
    },
    betImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    betData: {
        width: 'calc(100%)',
        marginLeft: 10,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        paddingTop: 5,
        color: theme.palette.background.default
    },
    percent: {
        color: 'white',
        fontSize: 20,
        opacity: 0.8
    },
    betName: {
        fontSize: 15,
        fontWeight: 500
    },
    betValue: {
        fontSize: 14,
    }
});

export default Bet;