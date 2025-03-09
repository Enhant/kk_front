import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

interface IStylesProp {
    backgroundColor: string,
    color: string,
    value?: string
}

const useStyles = makeStyles<null, IStylesProp>({
    elem: {
        backgroundColor: ({ backgroundColor }) => backgroundColor,
        color: ({ color }) => color,
        width: 35,
        height: 35,
        borderRadius: 35,
        lineHeight: '35px',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 800,
        marginRight: 5,
    }
})

const HistoryElem: React.FC<IStylesProp> = ({ backgroundColor, color, value }) => {
    const classes = useStyles({ backgroundColor, color });
    return (
        <Grid  className={classes.elem}>
            {value}
        </Grid>
    )
}

export default HistoryElem;
