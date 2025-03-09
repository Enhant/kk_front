import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/material/styles';

import HistoryElem from './HistoryElem';

const useStyles = makeStyles({
    history: {
        background: 'rgba(85, 28, 139, 0.8)',
        borderRadius: 5,
        width: '100%',
        textAlign: 'center',
        marginTop: 29,
        padding: '5px 0 20px'
    },
    header: {
        marginTop: 7,
        color: 'white',
        fontWeight: 300,
        fontSize: 29,
    }
})

interface IProps {
    history: Array<{ img?: string, name: string, gain: number, chance: string }>,
}

const History: React.FC<IProps> = ({history}) => {
    const classes = useStyles();
    return (
        <Grid className={classes.history}>
            <Grid className={classes.header}>
                История побед
            </Grid>

            <Grid container direction="row">
                {history.map( h => <HistoryElem name={h.name} gain={h.gain} key={`${h.name}${h.gain}`} chance={h.chance}/> )}
            </Grid>
        </Grid>
    );
}

export default History;