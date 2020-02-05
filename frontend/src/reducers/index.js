import { combineReducers } from 'redux';
import courtReducer from './courtReducer';
import flagReducer from './flagReducer';
import additionReducer from './additionReducer';
import inputReducer from './inputReducer';

export default combineReducers({
  courtStore: courtReducer,
  flagStore: flagReducer,
  storeOnAddition: additionReducer,
  storeOnInput: inputReducer
});