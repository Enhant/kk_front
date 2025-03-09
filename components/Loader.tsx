import { makeStyles } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
    loaderContainer: {
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(85, 28, 139, 0.9)',
        textAlign: 'center',
        "& > div": {
            marginTop: 100,
        }
    }
})

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.loaderContainer}>
            <CircularProgress />
        </div>
    )
}

export default Loader;
