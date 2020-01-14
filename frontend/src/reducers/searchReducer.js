import { searchInfo } from './initalState';
import { 
  SEARCH_COURTS_SUCCESS,
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_FAILURE,
  USER_INPUT,
} from '../actions/types';

const searchReducer = (state = searchInfo, { type, payload}) => {
  switch (type) {
    case SEARCH_COURTS_SUCCESS:
      return {
        ...state,
        isSearching: false,
        searchedCourts: [...payload]
      };

    case SEARCH_COURTS_REQUEST:
      return {
        ...state,
        isError: false,
        isSearching: true,
        userInput: payload.userInput
      };

    case SEARCH_COURTS_FAILURE:
      return {
        ...state,
        isSearching: false,
        isError: true,
        searchedCourts: []
      };

    case USER_INPUT:
      return {
        ...state,
        userInput: payload
      };

    default:
      return state;
  }
};

export default searchReducer;