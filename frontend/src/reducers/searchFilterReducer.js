import { initFilterInfo } from './initalState';
import { 
  SEND_FILTER_INPUT,
  INIT_FILTER_INPUT
} from '../actions/types';

const searchFilterReducer = (state = initFilterInfo, { type, payload }) => {
  switch (type) {
    case SEND_FILTER_INPUT:
      return {
        ...state,
        filterInput: { ...payload }
      };
    case INIT_FILTER_INPUT:
      return  {
        ...state,
        filterInput: {}
      };
    default:
      return state;
  }
};

export default searchFilterReducer;