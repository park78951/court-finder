import { 
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_SUCCESS,
  SEARCH_COURTS_FAILURE,
} from '../../config/constants';

const courtReducer = (state, { type, payload}) => {
  switch (type) {
    case SEARCH_COURTS_REQUEST:
      return {
        ...state,
        loading: true,
        errorMessage:null
      };
    case SEARCH_COURTS_SUCCESS:
      return {
        ...state,
        loading: false,
        courtsInfo: payload
      };
    case SEARCH_COURTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload
      };
    default:
      break;
  }
};

export default courtReducer;