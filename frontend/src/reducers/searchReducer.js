import { searchInfo } from './initialState';
import { 
  SEARCH_COURTS_SUCCESS,
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_FAILURE,
  USER_INPUT,
} from '../actions/types';

const searchReducer = (state = searchInfo, { type, payload}) => {
  switch (type) {
    case SEARCH_COURTS_SUCCESS:
      const { totalCourts, courtsData } = payload;
      return {
        ...state,
        isSearching: false,
        totalCourts,
        searchedCourts: [...courtsData],
      };

    case SEARCH_COURTS_REQUEST:
      return {
        ...state,
        isError: false,
        isSearching: true,
        userInput: payload.userInput,
        currentPage: payload.page,
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