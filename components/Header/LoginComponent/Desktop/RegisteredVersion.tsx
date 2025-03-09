import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from 'types';

import { logout } from 'UserProvider/actions';

import EnterModal from '../../Modals/Enter';
import WidthdrawModal from '../../Modals/Widthdraw';
import rnc from 'randomcolor';
import gemIcon from '@icons/gem.svg';

const RegisterLoginComponent = () => {
    const [ isOpenEnterModal, setIsOpenEnterModal ] = useState(false);
    const [ isWidthdrawModal, setIsWithdrawModal ] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    const { name, balance } = useSelector<IStore, { name: string, balance: string }>(state => state.user.user);

    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setAnchorEl(null);
    };

    const handleLogout = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(logout());
        setAnchorEl(null);
    }

    return (
        <Grid
            container
            direction="row-reverse"
            alignItems="center"
            className={classes.container}
        >
            <Grid item onClick={handleClick}>
                <Grid className={classes.userName} style={{ color: rnc({
                    seed: name,
                    luminosity: 'dark'
                }) }}>{name}</Grid>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem 
                        onClick={handleLogout}
                        className={classes.menuItem}
                    >
                        Выйти
                    </MenuItem>
                </Menu>
            </Grid>
            
            <Grid className={classes.balance}>{balance || 0} <img src={gemIcon}/></Grid>
            <Grid className={classes.topUpBalance}>
                <span onClick={() => setIsWithdrawModal(true)}>Вывести</span>
                <Modal
                    open={isWidthdrawModal}
                    onClose={() => setIsWithdrawModal(false)}
                >
                    <WidthdrawModal />
                </Modal>
                <span>/</span>
                <span onClick={() => setIsOpenEnterModal(true)}>Пополнить</span>
                <Modal
                    open={isOpenEnterModal}
                    onClose={() => setIsOpenEnterModal(false)}
                >
                    <EnterModal />
                </Modal>
            </Grid>
        </Grid>
    );
}


const useStyles = makeStyles({
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        background: `url(/kk_frontend/images/test_pudge.jpg)`,
        backgroundSize: 'cover',
    },
    balance: {
        lineHeight: '44px',
        color: '#1EFFFF',
        background: `linear-gradient( #5204a5, #6c24b4 )`,
        borderRadius: 10,
        fontSize: 27,
        width: 152,
        height: 44,
        textAlign: 'center',
        boxShadow: `0px 0px 14px #B240F5`,
    },
    userName: {
        fontSize: 25,
        color: 'rgb(72, 188, 131);',
        marginRight: 13,
        marginLeft: 28,
        width: 200,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textAlign: 'center',
    },
    topUpBalance: {
        display: 'flex',
        marginRight: 17,
        "& > span": {
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: "90px",
            color: 'white',
            display: 'block',
            marginLeft: 5,
            cursor: 'pointer'
        }
    },
    menuItem: {
        padding: '5px 40px',
        color: 'white',
    },
    container: {
        paddingTop: 20,
    }
})

export default RegisterLoginComponent;
