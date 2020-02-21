import { 
  TOGGLE_SIDEBAR,
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