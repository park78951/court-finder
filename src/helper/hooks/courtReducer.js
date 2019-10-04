import { 
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_SUCCESS,
  SEARCH_COURTS_FAILURE,
  TOGGLE_SIDEBAR
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
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarHidden: !state.isSidebarHidden
      };
    default:
      break;
  }
};

export default courtReducer;