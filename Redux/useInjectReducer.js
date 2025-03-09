import { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';

import invariant from 'invariant';
import { isEmpty, isFunction, isString, conformsTo } from 'lodash';

import createReducer from './createReducer';


function injectReducer(store) {
    return function injectReducer(key, reducer) {  
        invariant(
            isString(key) && !isEmpty(key) && isFunction(reducer),
            'injectReducer: Expected `reducer` to be a reducer function',
        );
        if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;
    
        store.injectedReducers[key] = reducer;
        store.replaceReducer(createReducer(store.injectedReducers));
    };
}


const useInjectReducer = (key, reducer) => {
    const context = useContext(ReactReduxContext);
    useEffect(() => {
      injectReducer(context.store)(key, reducer);
    }, []);
  };
  
export default useInjectReducer;
  