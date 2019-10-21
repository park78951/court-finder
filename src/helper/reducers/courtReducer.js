import { 
  SEARCH_COURTS,
  ADD_COURTS,
  SELECT_COURT
} from '../../config/constants';

const courtReducer = (
  { searchedCourts, selectedCourt, addedInfo }, 
  { type, payload }
) => {
  switch (type) {
    case SEARCH_COURTS:
      return {
        selectedCourt,
        addedInfo,
        searchedCourts: [...payload]
      };

    case ADD_COURTS:
      return {
        searchedCourts,
        selectedCourt,
        addedInfo: { ...addedInfo, ...payload }
      };
    
    case SELECT_COURT: 
      return {
        searchedCourts,
        addedInfo,
        selectedCourt: { ...payload }
      };

    default:
      break;
  }
};

export default courtReducer;