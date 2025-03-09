import { memo } from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {makeStyles} from '@mui/styles';

import theme from 'utils/theme';

import TabPanel from '@mui/lab/TabPanel';

import { TGameModes } from 'types';
import { statuses } from '../../namespace';

import { makeSelectUser } from 'UserProvider/selectors';
import { getWinnerName, getGameModeRestartTimers } from 'containers/classic/selectors';
import gemIcon from '@icons/gem.svg';

import Circle from 'common/ColoredCircle';

interface IProps {
    value: TGameModes,
    bet: number,
    chance: number,
    ticketPrice: number,
    makeBet: ((gameType: TGameModes) => () => void),
    status: statuses;
    name: string
    hasPlayerInGame: boolean
}

const BetTabPanel: React.FC<IProps> = ({value, bet, chance, ticketPrice, makeBet, status, hasPlayerInGame}) => {
    const classes = useStyles();
    const {name} = useSelector(makeSelectUser);
    const winnerName = useSelector( getWinnerName );
    const restartTimer = useSelector( getGameModeRestartTimers )[value];

    return (
        <TabPanel value={value} style={{ padding: 0 }} className={classes.tabPanel}>
            {status === statuses.game && (
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                    className={classes.gamerColorInfo}
                >
                    <Grid>
                        До новой игры:
                        <Grid className={classes.beforeNewGame}>
                            {restartTimer}
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid >
                            { hasPlayerInGame ? (
                                <>
                                    <Grid>Ваш цвет:</Grid> 
                                    <Circle number={name}/>
                                </>
                            ) : (
                                `Вы не участвуете в этой игре`
                            )}
                        </Grid>
                        <Grid >
                            { hasPlayerInGame ? (
                                <>
                                    <Grid>Победитель:</Grid> 
                                    <Circle number={winnerName}/>
                                </>
                            ) : (
                                `Вы не участвуете в этой игре`
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            )}
            <Grid className={classes.betPanel}>
                <Grid container className={classes.myBet}>
                    <Grid  className={undefined}>
                        <Grid>Моя ставка</Grid>
                        <Grid className={classes.betNumber}>{bet} <img src={gemIcon}/></Grid>
                    </Grid>
                    <Grid  className={undefined}>
                        <Grid>Шанс на победу</Grid>
                        <Grid className={classes.betNumber}>{chance}%</Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.placeBet}>
                    <Grid className={classes.placeBetText}>Поставить:</Grid>
                    <Button
                        className={classes.placeBetButton}
                        onClick={makeBet(value)}
                    >
                        {ticketPrice} <img src={gemIcon}/>
                    </Button>
                </Grid>
            </Grid>
        </TabPanel>
    )
}
 
const useStyles = makeStyles({
    gamerColorInfo: {
      background: 'rgba(85, 28, 139, 0.9)',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 3,
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },  
    tabPanel: {
        position: 'relative'
    },
    myBet: {
        border: '1px solid rgba(30, 255, 255, 0.5)',
        boxSizing: 'border-box',
        borderRadius: 3,
        padding: '5px 10px',
        color: theme.palette.primary.light,
        marginRight: 10,
        "& > div": {
            width: '50%',
            textTransform: 'uppercase',
            fontSize: 13,
            fontWeight: 100,
            color: 'white',
            "&:nth-child(2)": {
                borderLeft: '1px solid rgba(30, 255, 255, 0.5)',
                textAlign: 'right',
            }
        }
    },
    betNumber: {
        fontWeight: 400,
        fontSize: 22,
        "& > img": {
            verticalAlign: 'middle'
        }
    },
    placeBet: {
        marginTop: 30,
    },
    placeBetButton: {
        borderRadius: 10,
        marginTop: 5,
        padding: '5px 30px',
        color: theme.palette.primary.light,
        fontSize: 24,
        transition: '0.2s',
        border: `1px solid ${theme.palette.primary.light}`,
        "&:hover": {
            color: 'white',
            background: theme.palette.primary.light,
            boxShadow: `0 0 10px ${theme.palette.primary.light}, 
            0 0 10px ${theme.palette.primary.light},
            0 0 20px ${theme.palette.primary.light}`,
        }
    },
    placeBetText: {
        color: 'white',
    },
    betPanel: {
        maxWidth: '100%',
        background: 'rgba(85, 28, 139, 0.8)',
        borderRadius: '0px 0px 5px 5px',
        padding: '30px 20px 26px',
    },
    beforeNewGame: {
        fontSize: 28,
        lineHeight: 1,
    }
});

export default memo(BetTabPanel);
