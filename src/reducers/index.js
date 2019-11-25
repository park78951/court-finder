import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import flagReducer from './flagReducer';
import selectionReducer from './selectionReducer';
import additionReducer from './additionReducer';
import searchFilterReducer from './searchFilterReducer';

export default combineReducers({
  storeOnSearch: searchReducer,
  storeOnFlag: flagReducer,
  storeOnSelection: selectionReducer,
  storeOnAddition: additionReducer,
  storeOnFilter: searchFilterReducer
});