/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { makeStyles } from '@mui/styles';

import Grid from '@mui/material/Grid';

import theme from '../../../utils/theme';

import gem from '../../../assets/icons/gem.svg'

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
        <Grid  container className={classes.row}>
            <Grid  className={classes.img}>
                <img src={'url(/kk_frontend/images/test_pudge.jpg)'}/>
            </Grid>
            <Grid  className={classes.name}>{name}</Grid>
            <Grid  className={classes.gain}>{gain} <img src={gem}/></Grid>
            <Grid  className={classes.chance}>{chance}</Grid>
        </Grid>
    );
}

export default HistoryElem;
