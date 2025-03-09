import { makeStyles } from '@mui/styles';
import theme from '../../../utils/theme';
import TextField from '@mui/material/TextField';


const TextInput = ({ label = '', additionalClass = '', value = '', onChange, type = '', name = '' }) => {
    const classes = useStyles();

    return (
        <TextField 
            className={`${classes.input} ${additionalClass}`}
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            type={type}
            name={name}
        />
    );
}

const useStyles = makeStyles({
    input: {
        width: '100%',
        borderColor: 'white',
        "& > label": {
            color: "white",
        },
        "& > div": {
            borderColor: 'white',
            "& > input": {
                color: "white!important",
            },
            "& > fieldset": {
                borderColor: `${theme.palette.primary.dark}!important`,
            },
        }
    }
});

export default TextInput;
