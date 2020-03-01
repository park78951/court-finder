import { combineReducers } from 'redux';
import courtReducer from './courtReducer';
import uiReducer from './uiReducer';
import userReducer from './userReducer';
import postReducer from './postReducer';

export default combineReducers({
  courts: courtReducer,
  uiController: uiReducer,
  user: userReducer,
  post: postReducer,
});