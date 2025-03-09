import { useState, forwardRef } from 'react';

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/material/styles';

import TextInput from 'components/Common/TextInput';
import ButtonInput from 'components/Common/ButtonInput';

import theme from 'themeStore';

import { useDispatch } from 'react-redux';
import { enterMoneyAction } from 'UserProvider/actions';


const EnterMoneyModal = forwardRef(() => {
    const classes = useStyles();
    const [ price, setPrice ] = useState('');
    const dispatch = useDispatch();

    return (
        <Grid className={classes.modalContainer} container>
            <Grid className={classes.header} item xs={12}>
                Пополнить
            </Grid>
            <Grid item className={classes.body}>
                <TextInput
                    label="Сколько?"
                    additionalClass={classes.textInput}
                    value={price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPrice(e.target.value)}
                />
                <ButtonInput
                    label="Пополнить"
                    additionalClass={classes.buttonInput}
                    onClick={() => dispatch(enterMoneyAction(price))}
                />
            </Grid>
        </Grid>
    );
});

const useStyles = makeStyles({
    modalContainer: {
        background: theme.palette.background.paper,
        maxWidth: 500,
        margin: '7.5vw auto',
        borderRadius: 5,
        padding: '25px 5px 35px',
    },
    header: {
        textAlign: 'center',
        color: 'white',
        padding: '10px',
        fontSize: 25,
        marginBottom: 20,
    },
    textInput: {
        margin: 0,
        width: '75%',
    },
    buttonInput: {
        marginTop: 30,
    },
    body: {
        textAlign: 'center',
        width: '100%',
    }
})

export default EnterMoneyModal;
