import { makeStyles } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

import theme from '../../../utils/theme';

const imageSize = 35;

const useStyles = makeStyles({
    img: {
        width: imageSize,
        height: imageSize,
        borderRadius: 60,
        "& > img": {
            borderRadius: 60,
            width: imageSize,
            height: imageSize,
        },
        [theme.breakpoints.down('md')]: {
            width: imageSize,
            height: imageSize,
            "& > img": {
                borderRadius: 60,
                width: imageSize,
                height: imageSize,
            },
        }
    },
    row: {
        padding: '5px 10px'
    },
    name: {
        fontSize: 14,
        fontWeight: 400,
        color: '#fff',
        lineHeight: '40px',
        textAlign: 'left',
        paddingLeft: 10,
        [theme.breakpoints.down('md')]: {
            fontSize: 15,
            textAlign: 'center',
        }
    },
    gain: {
        fontSize: 14,
        fontWeight: 400,
        color: '#fff',
        lineHeight: '40px',
        [theme.breakpoints.down('md')]: {
            fontSize: 18,
        },
        "& > img": {
            height: 14,
        }
    },
    chance: {
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(119, 225, 207, 1)',
        lineHeight: '40px',
        [theme.breakpoints.down('md')]: {
            fontSize: 18,
        }
    }
})

const HistoryElem: React.FC<{gain: number, chance: string, name: string}> = ({ gain, chance, name }) => {
    const classes = useStyles();

    return (
        <Grid item container className={classes.row} xs={12} md={6}>
            <Grid item className={classes.img} xs={2}>
                <img src={require('./test_pudge.jpg')}/>
            </Grid>
            <Grid item className={classes.name} xs={4}>{name}</Grid>
            <Grid item className={classes.gain} xs={3}>{gain} <img src={require('../../../assets/icons/gem.svg')}/></Grid>
            <Grid item className={classes.chance} xs={3}>{chance}</Grid>
        </Grid>
    );
}

export default HistoryElem;
