import { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';

import invariant from 'invariant';
import { isEmpty, isFunction, isString, conformsTo } from 'lodash';

import createReducer from './createReducer';



export function injectSaga(store) {
  return function injectSaga(key, descriptor = {}, args) {
    const newDescriptor = {
      ...descriptor,
      mode: '@@saga-injector/daemon',
    };
    const { saga } = newDescriptor;

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSagas[key];
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (!hasSaga) {
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args),
      };
    }
  };
}

const useInjectSaga = ( key, saga ) => {
    const context = useContext(ReactReduxContext);
    useEffect(() => {
      injectSaga(context.store)(key, { saga });
    }, []);
};
  
export default useInjectSaga;