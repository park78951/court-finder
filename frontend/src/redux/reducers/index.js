import { combineReducers } from 'redux';
import courtReducer from './courtReducer';
import flagReducer from './flagReducer';
import additionReducer from './additionReducer';
import inputReducer from './inputReducer';
import userReducer from './userReducer';

export default combineReducers({
  courts: courtReducer,
  flags: flagReducer,
  storeOnAddition: additionReducer,
  input: inputReducer,
  user: userReducer,
});