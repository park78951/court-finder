import { userInfo } from './initialState';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from '@actions/types';

export default (state = userInfo, { type, payload} ) => {
  switch(type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLogginIn: true,
      }
    
    case LOG_IN_SUCCESS:
      const { userId, nickname } = payload;
      return {
        ...state,
        userId: userId,
        nickname: nickname,
        isLogginIn: false,
        isLoggedIn: true,
      }
    
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLogginIn: false,
        errorMsg: payload,
      }
    
    default: 
      return {
        ...state,
      }
  }
}