import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import createReducer from './createReducer';
import userSaga from 'UserProvider/saga';

export default function configureStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  let composeEnhancers = compose;
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({ collapsed: true });
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(
    createReducer(), 
    initialState,
    composeEnhancers(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {
    user: userSaga
  };
  store.runSaga(userSaga);

  if (module.hot) {
    module.hot.accept('./createReducer', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
