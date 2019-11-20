import { 
  TOGGLE_SIDEBAR,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION,
  TOGGLE_FILTER
} from '../config/constants';
import { initUIToggleInfo } from './initalState';

const uiReducers = (state = initUIToggleInfo, { type, payload }) => {
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
    case TOGGLE_FILTER:
      return {
        ...state,
        filterFlag: payload ? payload : !state.filterFlag
      };
    default: 
      return state;
  }
};

export default uiReducers;