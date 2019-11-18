import { combineReducer } from 'redux';
import courtReducer from './courtReducer';
import uiReducer from './uiReducer';

export default combineReducer({
  courtReducer,
  uiReducer
});