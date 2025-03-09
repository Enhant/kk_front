import {makeStyles} from '@mui/styles';
import theme from '../../../utils/theme';
import Button from '@mui/material/Button';

const ButtonInput = ({ label = '', additionalClass = '', onClick, type = '' }) => {
    const classes = useStyles();
    return (
        <Button
            className={`${classes.button} ${additionalClass}`}
            onClick={onClick}
            type={type}
        >{label}</Button>
    )
}

const useStyles = makeStyles({
    button: {
        color: 'white',
        width: 200,
        backgroundColor: theme.palette.background.default,
        transition: 'all 1s',
        "&:hover": {
            color: `${theme.palette.primary.light}`,
            backgroundColor: theme.palette.background.default,
            opacity: '0.9'
        }
    },
});

export default ButtonInput;
