import { initInputInfo } from './initialState';
import { 
  GET_FILTER_INPUT,
  GET_SEARCH_INPUT,
  INIT_FILTER_INPUT
} from '@actions/types';

const searchFilterReducer = (state = initInputInfo, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_INPUT:
      return {
        ...state,
        userInput: payload,
      };

    case GET_FILTER_INPUT:
      return {
        ...state,
        filterInput: {...payload}
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