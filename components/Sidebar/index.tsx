import Styles from './Sidebar.module.css';
import {sidebarRoutes as routes} from '../../containers/api/routes';

import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/styles';

import MenuElem from './components/MenuElem';

const useStyles = makeStyles<null, { mobile?: boolean }>({
    sidebar: {
        position: ({ mobile }) => mobile ? 'static' : 'fixed',
        left: 0,
        top: 0,
        height: ({ mobile }) => mobile ? 'auto' : '100vh',
        width: 75,
        color: 'white',
    }
})

const Slidebar: React.FC<{ mobile?: boolean }> = ({mobile}) => {
    const classes = useStyles({mobile});
    return (
        <Grid 
            justifyContent="center"
            alignItems="center" 
            direction="column" 
            container
            className={classes.sidebar} 
        >
            { routes.map( route => (
                <Grid className={Styles.link}  key={route.name}>
                    <MenuElem icon={route.icon} name={route.name} path={route.path}/>
                </Grid>
            ) ) }
        </Grid>
    );
}

export default Slidebar;
