import { 
  COMPLETE_SEARCH_COURTS,
  ADD_COURTS,
  SELECT_COURT,
  SEARCHING_COURTS,
  REMOVE_SELECT_COURT,
  CATCHING_ERROR
} from '../../config/constants';

const courtReducer = (
  { searchedCourts, selectedCourt, addedInfo, isSearching, isError }, 
  { type, payload }
) => {
  switch (type) {
    case COMPLETE_SEARCH_COURTS:
      return {
        selectedCourt,
        addedInfo,
        isError,
        isSearching: false,
        searchedCourts: [...payload]
      };

    case SEARCHING_COURTS:
      return {
        searchedCourts,
        selectedCourt,
        addedInfo,
        isError: false,
        isSearching: true
      };

    case CATCHING_ERROR:
      return {
        selectedCourt,
        addedInfo,
        isSearching: false,
        isError: true,
        searchedCourts: []
      };

    case ADD_COURTS:
      return {
        searchedCourts,
        selectedCourt,
        isSearching,
        addedInfo: { ...addedInfo, ...payload }
      };
    
    case SELECT_COURT: 
      return {
        searchedCourts,
        addedInfo,
        isSearching,
        selectedCourt: { ...payload }
      };
    
    case REMOVE_SELECT_COURT:
      return {
        searchedCourts,
        addedInfo,
        isSearching,
        selectedCourt: null
      };

    default:
      break;
  }
};

export default courtReducer;