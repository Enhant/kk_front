import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';


const Rules = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.head}>
                Правила
            </Grid>
            { rules.map( (rule, index) => (
                <Grid item xs={12} key={index} className={classes.rule}>
                    {rule}
                </Grid>
            ))}            
        </Grid>
    )
}

const rules = [
    "Запрещено иметь более, чем один аккаунт",
    "Запрещено использовать скрипты, программы",
    "Запрещено использовать сайт, как обменный пункт",
    "Запрещено вступать в сговор с кем либо, с целью повлиять на результаты игр",
    "Запрещено использовать недочёты, ошибки и сбои на сайте",
    "Только для пользователей с возврастом больше 18-ти лет"
];

const useStyles = makeStyles({
    container: {
        padding: 24,
        borderLeft: '1px solid rgba(58, 0, 186, 0.5)',
        height: '100%'
    },
    head: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 200,
        marginBottom: 12,
        width: '100%',
        textAlign: 'center'
    },
    rule: {
        color: 'rgba(250, 250, 230, 0.8)'
    }
});

export default Rules;