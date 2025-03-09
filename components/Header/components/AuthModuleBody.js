import { useState, useEffect, useCallback, forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/lab/Alert';

import cn from 'classnames';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';

import theme from 'themeStore';

import TextInput from 'common/TextInput';
import ButtonInput from 'common/ButtonInput';

import { authorizeAction, registerAction } from 'UserProvider/actions';
import { selectError } from 'UserProvider/selectors';

import { emailRegExp, paswordRegExp } from './regExpTest';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// eslint-disable-next-line react/display-name
const AuthModuleBody = forwardRef(() => {
    const classes = useStyles();
    // const [ email, setEmail ] = useState('');
    // const [ login, setLogin ] = useState('');
    // const [ password, setPassword ] = useState('');
    // const [ repeatPassword, setRepeatPassword ] = useState('');
    
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(authorizeAction(
            e.target.email.value,
            e.target.password.value,
        ))
    };

    const renderLoginPart = () => (
        <Grid
            container
            direction="column"
            item
            xs={12}
            md={6}
            className={cn(classes.selectAuthItem)}
            alignItems="center"
        >
            <Grid item className={classes.header}>
                У Меня есть аккаунт
            </Grid>
            <Grid
                item container justify="center"
                className={classes.form}
                component="form"
                onSubmit={handleLogin}
            >
                <Grid item className={classes.inputContainer}>
                    <TextInput
                        label="Email"
                        additionalClass={classes.input}
                        name="email"
                    />
                </Grid>
                <Grid item className={classes.inputContainer}>
                    <TextInput
                        label="Пароль" type="password"
                        additionalClass={classes.input} name="password"
                    />
                </Grid>
                <Grid item>
                    <ButtonInput type="submit" label="Войти" additionalClass={classes.button}/>
                </Grid>
            </Grid>
        </Grid>
    );

    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState('');

    const error = useSelector(selectError);
    useEffect(() => {
        if (error) {
            setAlertMessage(error.toString());
            // error, warning, info, success
            setAlertStatus('error');
            setOpenAlert(true);
        }
    }, [error])

    const handleRegister = useCallback((e) => {
        console.log(e);
        e.preventDefault();
        if (!emailRegExp.test(e.target.email.value)) {
            setAlertMessage('В поле почты не email');
            // error, warning, info, success
            setAlertStatus('error');
            setOpenAlert(true);
        } else if (
            e.target.password.value !== e.target.repeatPassword.value
        ) {
            setAlertMessage('Пароли не совпадают');
            // error, warning, info, success
            setAlertStatus('error');
            setOpenAlert(true);
        } else if (!paswordRegExp.test(e.target.password.value)) {
            console.log(e.target.password.value);
            setAlertMessage('В пароле как минимум 8 символов, одна буква и один символ');
            // error, warning, info, success
            setAlertStatus('error');
            setOpenAlert(true);
        } else {
            console.log('dispatch');
            dispatch(registerAction(
                e.target.email.value,
                e.target.login.value,
                e.target.password.value,
            ));
        }
    }, []);

    const renderRegisterPart = () => {
        return (
            <Grid
                container
                direction="column"
                item
                xs={12}
                md={6}
                className={cn(classes.selectAuthItem)}
                alignItems="center"
            >
                <Grid item className={classes.header}>
                    Я здесь впервые
                </Grid>
                <Grid 
                    item container 
                    justify="center"
                    className={classes.form}
                    component="form"
                    onSubmit={handleRegister}
                >
                    <Grid item className={classes.inputContainer}>
                        <TextInput label="Email" additionalClass={classes.input} name="email"/>
                    </Grid>
                    <Grid item className={classes.inputContainer}>
                        <TextInput label="Логин" additionalClass={classes.input} name="login"/>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs={6} className={classes.inputContainer}>
                            <TextInput
                                label="Пароль"
                                type="password"
                                additionalClass={classes.input}
                                name="password"
                            />
                        </Grid>
                        <Grid item xs={6} className={classes.inputContainer}>
                            <TextInput
                                label="Повтори пароль"
                                type="password"
                                additionalClass={classes.input}
                                name="repeatPassword"                            
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ButtonInput type="submit" label="Регистрация" additionalClass={classes.button}/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }


    const renderSnackBar = () => {
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            setOpenAlert(false);
        };
        return (
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertStatus}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        );
    }

    return (
        <Grid container justify="center" alignItems="center" onClick={(e) => e.stopPropagation()}>
            <Grid container item className={classes.container}>
                {renderLoginPart()}
                {renderRegisterPart()}
                {renderSnackBar()}
            </Grid>
        </Grid>
    );
});

const useStyles = makeStyles({
    container: {
        marginTop: 150,
        maxWidth: 900,
        height: 500,
        background: theme.palette.primary.main,
        borderRadius: 5,
        opacity: 0.8,
        "& > div:nth-child(1)": {
            borderRight: '1px solid rgba(0, 0, 0, 0.3)'
        },
        "& > div:nth-child(2)": {
            borderLeft: '1px solid rgba(0, 0, 0, 0.3)'
        }
    },
    selectAuthItem: {
        padding: 10,
    },
    header: {
        color: 'white',
        fontSize: 25,
        marginTop: 25,
        marginBottom: 80,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    form: {
        width: '90%',
    },
    button: {
        padding: 10,
    }
});

export default AuthModuleBody;
