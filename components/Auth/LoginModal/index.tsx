import Modal from '@mui/material/Modal';
import TextInput from '../../Common/TextInput';
import ButtonInput from '../../Common/ButtonInput';
import Rules from '../../Common/Rules';
import { makeStyles } from '@mui/styles';
import { Grid2 } from '@mui/material';

const useStyles = makeStyles({
    modal: {
        borderRadius: 10,
        outline: 'none',
        boxSizing: `border-box`,
        padding: 20,
        maxWidth: 450,
        height: 400,
        margin: '150px auto',
        backgroundColor: 'rgb(58, 0, 136)'
    },
    modalHeader: {
        textAlign: 'center',
        padding: '20px 0 15px',
        fontSize: 25,
        color: 'white',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontFamily: 'sans-serif'
    }
})

const LoginModal: React.FC<{ open: boolean, handleModalClose: () => void }> = ({open, handleModalClose}) => {
    const classes = useStyles();

    return (
            <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="login-modal"
                aria-describedby="login-modal-description"
            >
                <Grid2
                    className={classes.modal} 
                    container 
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <div className={ classes.modalHeader }>Логин</div>
                    <TextInput onChange={undefined} label="Имя пользователя"/>
                    <TextInput onChange={undefined} label="Пароль" />
                    <ButtonInput label="Зайти" onClick={undefined}/>
                    <Rules/>
                </Grid2>
            </Modal>
    );
}

export default LoginModal
