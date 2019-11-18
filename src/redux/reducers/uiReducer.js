import { 
  TOGGLE_SIDEBAR,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION
} from '../../config/constants';

const uiReducers = (state, { type }) => {
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
    default: 
      return state;
  }
};

export default uiReducers;