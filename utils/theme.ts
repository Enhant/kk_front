import { createMuiTheme } from '@mui/material';

const theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: 'rgb(58, 0, 136)', default: '#240055' },
    primary: {
      light: '#1EFAFA',
      main: 'rgba(85, 28, 139)',
      dark: '#148171',
    },
    secondary: {
      light: 'rgb(99,23,173)',
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: '#343434',
      secondary: 'rgba(0, 0, 0, 1)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    }
  },
});

export default theme;
