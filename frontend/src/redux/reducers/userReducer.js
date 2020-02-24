import { userInfo } from './initialState';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  TOGGLE_USER_MENU,
} from '@actions/types';

export default (state = userInfo, { type, payload} ) => {
  switch(type) {
    case LOG_IN_REQUEST:
      const { kakaoId } = payload;
      return {
        ...state,
        isLogginIn: true,
        userId: kakaoId,
      }
    
    case LOG_IN_SUCCESS:
      const { nickname } = payload;
      return {
        ...state,
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

    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLogginOut: true,
      }
    
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        userId: '',
        nickname: '',
        isLogginOut: false,
        isLoggedIn: false,
        isUserMenuOpen: false,
      }
    
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLogginOut: false,
        errorMsg: payload,
      }

    case TOGGLE_USER_MENU:
      return {
        ...state,
        isUserMenuOpen: !state.isUserMenuOpen,
      };  
    
    default: 
      return {
        ...state,
      }
  }
}