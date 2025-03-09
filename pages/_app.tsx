import { useEffect } from 'react';
import './reset.css';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Container from '../components/Container';

import theme from '../utils/theme';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { wrapper } from '../Redux/configureStore';

const useStyles = makeStyles({
  container: {
    background: "url(/kk_frontend/images/bg.jpg)",
    'box-sizing': 'border-box',
    fontFamily: 'sans-serif',
    backgroundSize: 'cover',
    minHeight: '100vh',
    height: '100%'
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>KeyKazino</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href={'url(/kk_frontend/images/icon1.ico'} type="image/png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.container}>
          <Header/>
          {!useMediaQuery('(max-width:1100px)') ? <Sidebar/> : null}
          <Container>
            <Component {...pageProps} />
          </Container>
        </div>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp);