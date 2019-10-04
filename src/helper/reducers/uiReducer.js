import { 
  TOGGLE_SIDEBAR,
  OPEN_PLACEADDITION,
  CLOSE_PLACEADDITION
} from '../../config/constants';

const uiReducers = (state, { type, payload }) => {
  switch(type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarHidden: !state.isSidebarHidden
      };
    case OPEN_PLACEADDITION:
      return {
        ...state,
        isPlaceAdditionOpen: true
      };
    case CLOSE_PLACEADDITION:
      return {
        ...state,
        isPlaceAdditionOpen: false
      };
    default: 
      break;
  }
};

export default uiReducers;


    