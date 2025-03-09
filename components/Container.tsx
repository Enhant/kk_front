import React from 'react';
import { makeStyles } from '@mui/material';
import theme from '../utils/theme';

export const Container = (props: any) => {
  const classes = useStyles();

  return <div className={`${classes.root} ${props.className}`}>{props.children}</div>;
};

const useStyles = makeStyles(() => ({
  root: {
    boxSizing: 'border-box',
    padding: '30px 50px',
    margin: 'auto',
    width: '1400px',
    [theme.breakpoints.down('xl')]: {
      width: 1400,
      padding: '10px 30px',
    },
    [theme.breakpoints.down('lg')]: {
      width: 1200,
      padding: '10px 30px',
    },
    [theme.breakpoints.down('md')]: {
      width: 900,
      padding: '10px px',
    },
    [theme.breakpoints.down('sm')]: {
      width: 500,
      padding: '10px 30px',
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
      padding: '0',
    },
  },
}));

export default Container;
