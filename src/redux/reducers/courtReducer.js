import { initCourtsInfo } from './initalState';
import { 
  COMPLETE_SEARCH_COURTS,
  ADD_COURTS,
  SELECT_COURT,
  SEARCHING_COURTS,
  REMOVE_SELECT_COURT,
  CATCHING_ERROR
} from '../../config/constants';

const courtReducer = (state = initCourtsInfo, { type, payload}) => {
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

    case ADD_COURTS:
      return {
        ...state,
        addedInfo: { ...state.addedInfo, ...payload }
      };
    
    case SELECT_COURT: 
      return {
        ...state,
        selectedCourt: { ...payload }
      };
    
    case REMOVE_SELECT_COURT:
      return {
        ...state,
        selectedCourt: null
      };

    default:
      return state;
  }
};

export default courtReducer;