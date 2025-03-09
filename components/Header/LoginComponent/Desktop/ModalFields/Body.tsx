import React from 'react';

import Grid from '@mui/material/Grid';

import {makeStyles} from '@mui/material/styles';

import theme from 'themeStore';

import FieldsBody from './FieldsBody';

import Rules from './Rules';


interface IProps {
    label: string;
}

const ModalFieldsBody: React.FC<IProps> = React.forwardRef(({label}, _) => {
    const classes = useStyles({});

    return (
        <Grid container className={classes.body}>
            <Grid xs={6} item>
                <FieldsBody label={label}/>
            </Grid>
            <Grid xs={6} item>
                <Rules/>
            </Grid>
        </Grid>
    );
});

const useStyles = makeStyles({
    body: {
        background: theme.palette.background.paper,
        maxWidth: 800,
        margin: '15vw auto',
        borderRadius: 5,
    }
});

export default ModalFieldsBody;
