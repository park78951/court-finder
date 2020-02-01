import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from '@reducers';
import rootSaga from '@sagas';

export default () => {
  let store = null;
  const sagaMiddleware = createSagaMiddelware();
  const isClient = typeof window !== 'undefined';
  const middleWares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleWares))
    : compose(
      applyMiddleware(...middleWares),
      typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    
  if(isClient) {
    const {persistReducer} = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      'key': 'root',
      storage
    }

    store = createStore(
      persistReducer(persistConfig, rootReducer), 
      {}, 
      enhancer
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(rootReducer, {}, enhancer);
  }
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};