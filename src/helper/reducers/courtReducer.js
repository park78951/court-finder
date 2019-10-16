import { 
  SEARCH_COURTS,
  ADD_COURTS
} from '../../config/constants';

const courtReducer = (
  { searchedInfo, addedInfo}, 
  { type, payload}
) => {
  switch (type) {
    case SEARCH_COURTS:
      return {
        addedInfo,
        searchedInfo: [...payload]
      };

    case ADD_COURTS:
      return {
        searchedInfo,
        addedInfo: { ...addedInfo, ...payload }
      };

    default:
      break;
  }
};

export default courtReducer;