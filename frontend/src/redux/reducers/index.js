import { combineReducers } from 'redux';
import courtReducer from './courtReducer';
import uiReducer from './uiReducer';
import inputReducer from './inputReducer';
import userReducer from './userReducer';

export default combineReducers({
  courts: courtReducer,
  uiController: uiReducer,
  input: inputReducer,
  user: userReducer,
});