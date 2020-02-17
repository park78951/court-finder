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
      return {
        ...state,
        id: payload.id,
        nickname: payload.nickname,
        email: payload.email,
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