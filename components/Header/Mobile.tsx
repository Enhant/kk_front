import {useState} from 'react';

import ButtonInput from '../Common/inputs/Button';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

import { makeStyles } from '@mui/styles';

import Link from 'next/link'

import RegisteredVersion from './LoginComponent/Mobile/RegisteredVersion';

import Slidebar from '../Sidebar';


interface IProps {
    headerOptions: Array<{path: string, name: string}>;
    isAuthorized: boolean;
}

const HeaderMobile: React.FC<IProps> = ({ headerOptions, isAuthorized }) => {
    const classes = useStyles();
    const [menuState, setMenuState] = useState(false);
    const toggleMenu = (open: boolean) => () => {
      setMenuState(open);
    };
    return (
        <Grid>
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleMenu(true)}>
                    <MenuIcon color="primary" />
                </IconButton>
            </Toolbar>

            <Grid className={classes.headerContainer}>
                <img src={require('../../assets/images/header.svg')}/>
            </Grid>

            <Drawer open={menuState} onClose={toggleMenu(false)}>
                <Grid 
                    className={classes.menu}
                    container
                    alignItems="center"
                    direction="column"
                    alignContent="center"
                >
                    {isAuthorized ? (
                        <RegisteredVersion/>
                    ) : ''}
                    {
                        headerOptions.map( option => (
                            <Grid className={classes.link} item key={option.name}>
                                <Link href={option.path}>{option.name}</Link>
                            </Grid>
                        ))
                    }
                       
                    <Slidebar mobile/>
                    {isAuthorized ? (
                        <Grid className={ classes.buttonContainer }>
                            <ButtonInput value="Выйти" stylesProps={{width: 152}}/>
                        </Grid>
                    ) : ''}
                </Grid>
            </Drawer>
        </Grid>
    )
}

const useStyles = makeStyles({
    menuButton: {
        position: 'absolute',
        zIndex: 5,
        top: 25,
        left: 20,
        padding: 0,
        "& svg": {
            height: 35,
            width: 35,            
        }
    },
    link: {
        marginTop: 15,
        "& > a": {
            textDecoration: 'none',
            color: 'white',
            fontSize: 18,
            fontWeight: 600,
        }
    },
    drawer: {
        width: 100,
    },
    menu: {
        background: 'rgba(39, 26, 52, 0.9)',
        width: 187,
        height: '100%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        "& > button": {
            marginRight: 0
        }
    },
    headerContainer: {
        position: 'absolute',
        top: 10,
        left: 16,
        width: 'calc(100vw - 32px)',
        textAlign: 'center'
    },
});

export default HeaderMobile;
