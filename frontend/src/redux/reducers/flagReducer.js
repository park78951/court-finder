import { 
  TOGGLE_SIDEBAR,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION,
  CLOSE_NICKNAME_CHANGER,
  OPEN_NICKNAME_CHANGER,
} from '@actions/types';
import { initUIToggleInfo } from './initialState';

const uiReducers = (state = initUIToggleInfo, { type }) => {
  switch(type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarHidden: !state.isSidebarHidden
      };

    case OPEN_COURTADDITION:
      return {
        ...state,
        courtAdditionFlag: true
      };

    case CLOSE_COURTADDITION:
      return {
        ...state,
        courtAdditionFlag: false
      };

    case OPEN_NICKNAME_CHANGER:
      return {
        ...state,
        isOpenNicknameChanger: true,
      };

    case CLOSE_NICKNAME_CHANGER:
      return {
        ...state,
        isOpenNicknameChanger: false,
      };
      
    default: 
      return state;
  }
};

export default uiReducers;