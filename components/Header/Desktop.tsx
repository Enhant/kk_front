import Grid from '@mui/material/Grid2';

import { makeStyles } from '@mui/styles';

import UnregisterComponent from './LoginComponent/Desktop/UnregisteredVersion';
import RegisteredComponent from './LoginComponent/Desktop/RegisteredVersion';

import Link from 'next/link';

import header from '../../assets/images/header.svg';


interface IProps {
    headerOptions: Array<{path: string, name: string}>;
    isAuthorized: boolean;
}

const HeaderDesktop: React.FC<IProps> = ({ headerOptions, isAuthorized }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.header} component={"header"} container justify="space-between">
            <Grid item container xs={6}>
                <Grid item xs={2} className={classes.headerContainer}>
                    <img src={header} className={classes.headerIcon}/>
                </Grid>

                <Grid container item justify="space-between" xs={8}>
                    {
                        headerOptions.map( option => (
                            <Grid className={classes.link} item key={option.name}>
                                <Link href={option.path}>{option.name}</Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>

            <Grid 
                item 
                container 
                xs={6} 
                direction="row-reverse"
                alignItems="center"
            >
                {isAuthorized ? 
                    <RegisteredComponent /> :
                    <UnregisterComponent/>
                }
            </Grid>
        </Grid>
    )
};

const useStyles = makeStyles({
    header: {
        margin: 'auto',
        padding: '0 25px',
    },
    headerIcon: {
        maxWidth: 103,
        height: 90 
    },
    headerContainer: {
        marginRight: 63,
    },
    link: {
        "& > a": {
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: "90px",
            color: 'white',
            display: 'block',
            transition: 'all 0.5s',
            "&:hover": {
                borderBottom: `2px solid #5204a5`,
            }
        },
    }
});

export default HeaderDesktop;
