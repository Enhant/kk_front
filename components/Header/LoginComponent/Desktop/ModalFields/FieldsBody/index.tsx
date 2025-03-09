import { useState } from 'react';

import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';
import TextInput from 'components/Common/TextInput';
import ButtonInput from 'components/Common/ButtonInput';

import { useDispatch } from 'react-redux';
import { authorizeAction } from 'UserProvider/actions';


interface IProps {
    label: string;
}

const FieldsBody: React.FC<IProps> = ({label}) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();
    const handleOnSubmit = () => dispatch(authorizeAction(email, password));

    return (
        <Grid container className={classes.container}>
            <Grid className={classes.head}>
                {label}
            </Grid>
            <Grid>
                <TextInput 
                    label="Email" 
                    additionalClass={classes.textInput}
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setEmail(e.target.value)}
                />
                <TextInput
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPassword(e.target.value)}
                    label="Пароль"
                    additionalClass={classes.textInput}
                    type="password"    
                />
            </Grid>
            <Grid>
                <ButtonInput 
                    label="Войти" 
                    additionalClass={classes.button}
                    onClick={handleOnSubmit}
                />
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles({
    container: {
        padding: 24,
    },
    head: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 36,
        lineHeight: '42px',
        fontWeight: 200,
        marginBottom: 12,
    },
    textInput: {
        margin: '5px 0',
        height: 30,
        "& > div": {
            height: 30,
        },
        "& > label": {
            transform: 'translate(7px, 8px) scale(1)'
        }
    },
    button: {
        width: '100%',
        marginTop: 12
    }
});

export default FieldsBody;