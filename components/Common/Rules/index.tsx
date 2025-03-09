import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import theme from '../../../utils/theme';

const useStyles = makeStyles({
    rules: {
        "& > a": {
            color: `${theme.palette.primary.light}`,
        },
        "& > a:hover": {
            color: `${theme.palette.primary.dark}`,
        }
    },
})

const Rules = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.rules}><Link href="#">Заходя на сайт, вы соглашаетесь с правилами</Link></Grid>
    )
}

export default Rules;
