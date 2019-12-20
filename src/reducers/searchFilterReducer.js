import { initFilterInfo } from './initalState';
import { 
  ACTIVE_BUTTON,
  SEND_FILTER_DATA,
  INIT_FILTER_DATA
} from '../actions/types';

const searchFilterReducer = (state = initFilterInfo, { type, payload }) => {
  switch (type) {
    case ACTIVE_BUTTON:
      return {
        ...state,
        activeBtn: payload
      };
    case SEND_FILTER_DATA:
      return {
        ...state,
        filterData: payload
      };
    case INIT_FILTER_DATA:
      return  {
        ...state,
        filterData: {}
      };
    default:
      return state;
  }
};

export default searchFilterReducer;