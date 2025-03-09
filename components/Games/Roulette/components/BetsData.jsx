import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { DefaultTheme } from '@mui/styles';
import theme from '../../../../utils/theme';

const mockData = [
    { username: 'Valera', bet: 200 },
    { username: 'Vitalya', bet: 20 },
    { username: 'Bomba', bet: 2 },
    { username: 'SuperCell', bet: 1200 },
    { username: 'Radja', bet: 99999 }
];

const mockData1 = [
    { username: 'Valera', bet: 200 },
    { username: 'Vitalya', bet: 20 },
    { username: 'Bomba', bet: 2 },
    { username: 'SuperCell', bet: 1200 },
    { username: 'Radja', bet: 99999 },
    { username: 'Radja1', bet: 99999 }
];

const Bet = ({data, color="red" }) => {
    const classes = useStyles({ color });
  
    return (
        <Grid item container className={classes.bet} xs={12} md={4} direction="column">
            <Grid className={ classes.headerData } container justify="space-between">
                <Grid item>Ставка</Grid> <Grid item>{Object.values(data).reduce( (acc, curr) => acc+=curr, 0 )}</Grid>
            </Grid>
            <Grid className={classes.dataList} container direction="column">
                {Object.entries(data).map( ([username, bet]) => (
                    <Grid 
                        container 
                        justify="space-between" 
                        className={classes.dataListElem} 
                        key={username}
                    >
                        <Grid className={classes.dataListElemUsername}>{username}</Grid>
                        <Grid className={classes.dataListElemBet}>{bet}</Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
};

const useStyles = makeStyles({
    header: {

    },
    headerData: {
        background: ({ color }) => `${color}`,
        padding: '10px 15px',
        color: 'white',
        borderRadius: '10px 10px 0 0',
        fontSize: 17,
        maxHeight: 44,
    },
    dataList: {
        background: 'rgba(85, 28, 139, 0.79)',
        color: 'white',
        borderRadius: '0 0 10px 10px'
    },
    dataListElem: {
        padding: '10px 20px',
    },
    bet: {
        marginTop: 20,
        "&:first-child": {
            marginLeft: 0
        }
    },
    dataListElemBet: {
        marginLeft: 10,
        color: theme.palette.primary.light,
        textAlign: 'right',
        fontWeight: 200,
    },
    dataListElemUsername: {
        fontWeight: 800,
    },
});

const useBetsDataStyles = makeStyles({
    betsStatuses: {
        marginTop: 30,
    }
})

const BetsData = ({ betsData }) => {
    const classes = useBetsDataStyles();
    
    return (
        <Grid container className={ classes.betsStatuses } spacing={1}>
            <Bet data={betsData['red']} color="rgba(231, 76, 60, 0.8)" />
            <Bet data={betsData['blue']} color="rgba(14, 161, 211, 0.8)"/>
            <Bet data={betsData['black']} color="rgba(0, 0, 0, 0.8)" />
        </Grid>
    );
}

export default BetsData;
