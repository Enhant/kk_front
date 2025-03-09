import HistoryElem from './HistoryElem';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';


interface IProps {
    history: Array<{ backgroundColor: string, color: string, value: string }>
}

const useStyles = makeStyles({
    historyContainer: {
        height: 35,
        maxWidth: 450,
        marginTop: 10,
        overflow: 'hidden'
    }
})

const WheelHistory: React.FC<IProps> = ({history}) => {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.historyContainer}
        >
            { history.map( (h, index) => (
                <HistoryElem {...h} key={index} />
            ) ) }
        </Grid>
    );
}

export default WheelHistory;
