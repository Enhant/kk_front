import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import theme from '../../../../utils/theme';
import TextInput from '../../../Common/TextInput';
import clsx from 'clsx';

import { IStore } from 'types';

import {
  makeSelectUser,
} from '../../../../containers/UserProvider/selectors.js';

const BetPanel = ({ handleBetEmit }) => {
    const classes = useStyles();
    
    const balance = useSelector(state => state.user.user.balance);
    const [bet, setBet] = useState(0);
    const [greenBet, setGreenBet] = useState(0);
    const [redBet, setRedBet] = useState(0);
    const [blackBet, setBlackBet] = useState(0);

    const { email, name } = useSelector(makeSelectUser);
    
    const handleBet = useCallback(( state, setState, color ) => () => {
        setState(+state + +bet);
        handleBetEmit?.current?.(bet, color, email, name);
        setBet(0);
    }, [email, name, handleBetEmit, bet]);

    return (
        <Grid className={ classes.panel } item>
            <ButtonGroup className={classes.group} color="primary" aria-label="outlined primary button group">
                <Button onClick={ () => setBet(1) }>Min</Button>
                <Button onClick={ () => setBet(Number(bet)*2) }>x2</Button>
                <Button onClick={ () => setBet(Number(bet)/2) }>1/2</Button>
                <Button onClick={ () => setBet(Number(balance)) }>All-in</Button>
            </ButtonGroup>
            <TextInput 
                additionalClass={classes.textInput}
                value={String(bet)}
                onChange={(e) => setBet(Number(e.target.value))}
            />
            <Grid>
                <Grid className={classes.betHeader}>Поставить</Grid>
                <Grid container justify="space-between" spacing={1}>
                    <Grid item sm={12} md={4}>
                        <Button 
                            className={clsx(classes.redBet, classes.bet)}
                            onClick={handleBet(redBet, setRedBet, 'red')}
                        >
                            {redBet}
                            <Grid className={classes.coefficient}>x2</Grid>    
                        </Button>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Button 
                            className={clsx(classes.greenBet, classes.bet)} 
                            onClick={handleBet(greenBet, setGreenBet, 'blue')}
                        >
                            {greenBet}
                            <Grid className={classes.coefficient}>x14</Grid>
                        </Button>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Button 
                            className={clsx(classes.blackBet, classes.bet)}
                            onClick={handleBet(blackBet, setBlackBet, 'black')}
                        >
                            {blackBet}
                            <Grid className={classes.coefficient}>x2</Grid>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles({
    panel: {
        width: 450,
        minHeight: 250,
        background: `rgba(85, 28, 139, 0.78)`,
        textAlign: 'center',
        padding: 20,
        borderRadius: 10,
    },
    group:{
        width: '100%',
        margin: '10px auto 20px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(62, 62, 96, 0.6) 14.06%)',
        "& button": {
            width: '25%',
            color: '#fff',
        }
    },
    groupHover: {
        "&:hover": {
            background: theme.palette.background.default
        }
    },
    textInput: {
        height: 38,
        marginTop: 0,
        "& input": {
            textAlign: 'center'
        },
        "& > div": {
            height: '100%',
            "& > input": {
                fontSize: 20,
                fontWeight: 500,
                height: '100%',
                boxSizing: 'border-box',
                borderRadius: 4,
                color: 'rgba(0,0,0,0.9)'
            }
        }
    },
    bet: {
        fontWeight: 400,
        opacity: 0.5,
        "&:hover": {
            opacity: 1,
        },
        fontSize: 30,
        color: 'white',
        width: 110,
        height: 42,
        borderRadius: 14,
    },
    greenBet: {
        background: 'linear-gradient(180deg, rgba(14, 161, 211, 0.8) 72.92%, rgba(9, 151, 200, 0.64) 100%)'
    },
    redBet: {
        background: 'linear-gradient(180deg, rgba(231, 76, 60, 0.8) 73.44%, rgba(191, 59, 45, 0.736) 100%)'
    },
    blackBet: {
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 90.1%, rgba(23, 23, 23, 0.608) 100%)'
    },
    coefficient: {
        opacity: 0.1,
        fontSize: 37,
        fontWeight: 400,
    },
    betHeader: {
        marginTop: 10,
        fontSize: 21,
        color: 'white',
        fontFamily: 'sans-serif',
        textAlign: 'left',
        fontWeight: 800,
        marginBottom: 15,
    }
})

export default BetPanel;
