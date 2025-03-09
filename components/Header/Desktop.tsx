import { makeStyles } from '@mui/styles';

import UnregisterComponent from './LoginComponent/Desktop/UnregisteredVersion';
import RegisteredComponent from './LoginComponent/Desktop/RegisteredVersion';

import Link from 'next/link';

import header from '../../assets/images/header.svg';
import { Grid2 } from '@mui/material';


interface IProps {
    headerOptions: Array<{path: string, name: string}>;
    isAuthorized: boolean;
}

const HeaderDesktop: React.FC<IProps> = ({ headerOptions, isAuthorized }) => {
    const classes = useStyles();

    return (
        <Grid2 className={classes.header} component={"header"} container justifyContent="space-between">
            <Grid2>
                <Grid2 className={classes.headerContainer}>
                    <img src={header} className={classes.headerIcon}/>
                </Grid2>

                <Grid2 container justifyContent="space-between">
                    {
                        headerOptions.map( option => (
                            <Grid2 className={classes.link} key={option.name}>
                                <Link href={option.path}>{option.name}</Link>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Grid2>

            <Grid2 
                 
                container 
 
                direction="row-reverse"
                alignItems="center"
            >
                {isAuthorized ? 
                    <RegisteredComponent /> :
                    <UnregisterComponent/>
                }
            </Grid2>
        </Grid2>
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
