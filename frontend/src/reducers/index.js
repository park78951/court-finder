import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import flagReducer from './flagReducer';
import selectionReducer from './selectionReducer';
import additionReducer from './additionReducer';
import inputReducer from './inputReducer';

export default combineReducers({
  storeOnSearch: searchReducer,
  storeOnFlag: flagReducer,
  storeOnSelection: selectionReducer,
  storeOnAddition: additionReducer,
  storeOnInput: inputReducer
});