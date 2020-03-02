import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';
import rootReducer from '@reducers';
import rootSaga from '@sagas';

export default (initialState, options) => {
  let store = null;
  const sagaMiddleware = createSagaMiddelware();
  const middleWares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleWares))
    : compose(
      applyMiddleware(...middleWares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' 
        ? window.__REDUX_DEVTOOLS_EXTENSION__() 
        : (f) => f,
    );

  store = createStore(rootReducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  
  return store;
};