import React from 'react';
import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/styles';


import Link from 'next/link'


const RegisterLoginComponent = () => {
    const gemIcon = require('@assets/icons/gem.svg');
    const classes = useStyles();
    return (
        <Grid 
            container
            direction="column"
            alignItems="center"
            alignContent="flex-start"
        >
            <Grid item>
                <Grid className={classes.logo}/>
            </Grid>
            <Grid item className={classes.userName}>Админ</Grid>
            
            <Grid item className={classes.balance}>0 <img src={gemIcon}/></Grid>
            <Grid item className={classes.topUpBalance}>
                <Link href="/">Пополнить баланс</Link>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles({
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        background: `url(${require('../../../../assets/images/test_pudge.jpg')})`,
        backgroundSize: 'cover',
        marginTop: 10,
    },
    balance: {
        marginTop: 5,
        lineHeight: '37px',
        color: '#1EFFFF',
        background: `linear-gradient( #5204a5, #6c24b4 )`,
        borderRadius: 10,
        fontSize: 18,
        width: 124,
        height: 37,
        textAlign: 'center',
        boxShadow: `0px 0px 14px #B240F5`,
        "& > img": {
            verticalAlign: 'middle',
            height: 15
        }
    },
    userName: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 400,
    },
    topUpBalance: {
        width: '100%',
        "& > a": {
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: 600,
            lineHeight: "20px",
            color: 'white',
            display: 'block',
            textAlign: 'center'
        }
    }
});

export default RegisterLoginComponent;
