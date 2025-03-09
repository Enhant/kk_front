import {makeStyles} from '@mui/styles';

import theme from '../../../../../utils/theme';

import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

import TabPanel from './TabPanel';
import TabContext from '@mui/lab/TabContext';

import { IClassic, TGameModes } from 'types';
import { statuses } from '../../namespace';


interface IProps {
    betLevel: string
    onChangeBetLevel: (newBetLevel: TGameModes) => () => void
    gameData: IClassic
    makeBet: ((gameType: TGameModes) => () => void),
    status: statuses
    name: string
    hasPlayerInGame: boolean
}

const BetPanel: React.FC<IProps> = ({
    betLevel, 
    onChangeBetLevel, 
    gameData, 
    makeBet, 
    status,
    name: username,
    hasPlayerInGame
}) => {
    const classes = useStyles();
    const gamesName: TGameModes[] = ["fastGameData", "easyGameData", "vipGameData"];
    

    return (
        <TabContext value={betLevel}>
            <TabList
                variant="scrollable"
                className={classes.tabContainer}
                classes={{ indicator: classes.indicator }}
            >
                <Tab
                    label="FAST" 
                    value="fastGameData" 
                    onClick={onChangeBetLevel("fastGameData")} 
                    className={classes.tab}
                />
                <Tab
                    label="EASY" 
                    value="easyGameData"
                    onClick={onChangeBetLevel("easyGameData")} 
                    className={classes.tab}
                />
                <Tab 
                    label="VIP" 
                    value="vipGameData" 
                    onClick={onChangeBetLevel("vipGameData")} 
                    className={classes.tab}
                />
            </TabList>
            {
                gamesName.map(name => {
                    const {myBet, ticketPrice, chanceOnWin} = gameData[name].gamerData;

                    return (
                        <TabPanel 
                            value={name}
                            bet={myBet}
                            chance={chanceOnWin}
                            ticketPrice={ticketPrice}
                            makeBet={makeBet}
                            status={status}
                            name={username}
                            hasPlayerInGame={hasPlayerInGame}
                            key={name}
                        />
                    )
                })
            }
        </TabContext>
    )
}

const useStyles = makeStyles({
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
    myChance: {
        width: 150,
        padding: '5px 25px',
        color: '#fff',
        border: `0.5px solid #fff`,
        borderRadius: '10px 0px 10px 0',
    },
    chanceNumber: {
        fontWeight: 700,
        fontSize: 25,
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
    tabContainer: {
        width: '100%',
        "& > div > div": {
            justifyContent: 'space-between'
        }
    },
    tab: {
        minWidth: '30%',
        background: 'rgba(85, 28, 139, 0.8)',
        borderRadius: '10px 10px 0px 0px',
        color: '#fff',
    },
    tabSelected: {
        background: 'rgba(85, 28, 139, 0.8)'
    },
    indicator: {
        display: 'none',
        backgroundColor: 'none'
    }
});

export default BetPanel;
