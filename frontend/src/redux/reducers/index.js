import { combineReducers } from 'redux';
import courtReducer from './courtReducer';
import uiReducer from './uiReducer';
import userReducer from './userReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
  courts: courtReducer,
  uiController: uiReducer,
  user: userReducer,
  review: reviewReducer,
});