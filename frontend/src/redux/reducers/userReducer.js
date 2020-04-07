import { userState } from './initialState';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  AUTO_LOG_IN,
} from '@actions/types';

export default (state = userState, { type, payload} ) => {
  switch(type) {
    case LOG_IN_REQUEST: {
      const { userId } = payload;
      return {
        ...state,
        isLoggingIn: true,
        userId
      };
    }
    
    case LOG_IN_SUCCESS: {
      const { nickname } = payload;
      return {
        ...state,
        nickname,
        isLoggingIn: false,
        isLoggedIn: true,
      };
    }
    
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        errorMsg: payload,
      };
    }

    case AUTO_LOG_IN: {
      const { userId, nickname } = payload;
      return {
        ...state,
        userId,
        nickname,
        isLoggedIn: true,
      };
    }

    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLogginOut: true,
      };
    }
    
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        userId: '',
        nickname: '',
        isLogginOut: false,
        isLoggedIn: false,
      };
    }
    
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLogginOut: false,
        errorMsg: payload,
      };
    }
    
    default: {
      return {
        ...state
      };
    }
  }
};