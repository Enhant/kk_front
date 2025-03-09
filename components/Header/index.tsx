import { useLayoutEffect } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';

import { useSelector } from 'react-redux';
import { IStore } from 'types';

import HeaderMobile from './Mobile';
import HeaderDesktop from './Desktop';

import { useDispatch } from 'react-redux';
import { checkTokenAction } from 'UserProvider/actions';

import { headerOptions } from './constants';


const Header = () => {
    const isAuthorized = useSelector<IStore, boolean>(state => state.user.isAuthorized);
    const dispatch = useDispatch();
    
    useLayoutEffect( () => {
        dispatch(checkTokenAction());
    }, []);

    return useMediaQuery('(max-width:1100px)') ? (
        <HeaderMobile headerOptions={headerOptions} isAuthorized={isAuthorized}/>
    ) : ( 
        <HeaderDesktop headerOptions={headerOptions} isAuthorized={isAuthorized}/>
    );
}
    


export default Header;
