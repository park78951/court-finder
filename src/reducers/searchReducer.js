import { searchInfo } from './initalState';
import { 
  COMPLETE_SEARCH_COURTS,
  SEARCHING_COURTS,
  CATCHING_ERROR
} from '../config/constants';

const searchReducer = (state = searchInfo, { type, payload}) => {
  switch (type) {
    case COMPLETE_SEARCH_COURTS:
      return {
        ...state,
        isSearching: false,
        searchedCourts: [...payload]
      };

    case SEARCHING_COURTS:
      return {
        ...state,
        isError: false,
        isSearching: true
      };

    case CATCHING_ERROR:
      return {
        ...state,
        isSearching: false,
        isError: true,
        searchedCourts: []
      };

    default:
      return state;
  }
};

export default searchReducer;