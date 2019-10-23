import { 
  COMPLETE_SEARCH_COURTS,
  ADD_COURTS,
  SELECT_COURT,
  SEARCHING_COURTS
} from '../../config/constants';

const courtReducer = (
  { searchedCourts, selectedCourt, addedInfo, isSearching }, 
  { type, payload }
) => {
  switch (type) {
    case COMPLETE_SEARCH_COURTS:
      return {
        selectedCourt,
        addedInfo,
        isSearching: false,
        searchedCourts: [...payload]
      };

    case SEARCHING_COURTS:
      return {
        searchedCourts,
        selectedCourt,
        addedInfo,
        isSearching: true
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

    default:
      break;
  }
};

export default courtReducer;