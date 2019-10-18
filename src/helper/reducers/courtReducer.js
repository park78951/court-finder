import { 
  SEARCH_COURTS,
  ADD_COURTS,
  SELECT_COURT
} from '../../config/constants';

const courtReducer = (
  { searchedInfo, selectedInfo, addedInfo }, 
  { type, payload }
) => {
  switch (type) {
    case SEARCH_COURTS:
      return {
        selectedInfo,
        addedInfo,
        searchedInfo: [...payload]
      };

    case ADD_COURTS:
      return {
        searchedInfo,
        selectedInfo,
        addedInfo: { ...addedInfo, ...payload }
      };
    
    case SELECT_COURT: 
      return {
        searchedInfo,
        addedInfo,
        selectedInfo: { ...payload }
      };

    default:
      break;
  }
};

export default courtReducer;