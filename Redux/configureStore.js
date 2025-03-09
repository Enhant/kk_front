import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import createReducer from "./createReducer";
import rootSaga from "./rootSaga";

import { createLogger } from 'redux-logger';

import { createWrapper } from 'next-redux-wrapper'


const dev = process.env.NODE_ENV !== 'production';

function configureStore(initialState) {
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

  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.injectedReducers = {};
  store.injectedSagas = {};
  store.runSaga = sagaMiddleware.run;

  return store;
}

export const wrapper = createWrapper(configureStore, { debug: dev })
