import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';
import rootReducer from '@reducers';
import rootSaga from '@sagas';

export default () => {
  const sagaMiddleware = createSagaMiddelware();
  const middleWares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleWares))
    : compose(
      applyMiddleware(...middleWares),
      typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
  const store = createStore(rootReducer, {}, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};