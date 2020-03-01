import { searchInfo } from './initialState';
import { 
  SEARCH_COURTS_SUCCESS,
  SEARCH_COURTS_REQUEST,
  SEARCH_COURTS_FAILURE,
  SEARCH_COURT_SUCCESS,
  SEARCH_COURT_REQUEST,
  SEARCH_COURT_FAILURE,
  SELECT_COURT,
  MOUSEOVER_LIST,
  UNSELECT_COURT,
  GET_FILTER_INPUT,
  INIT_FILTER_INPUT,
} from '@actions/types';

const courtReducer = (state = searchInfo, { type, payload }) => {
  switch (type) {
  case SEARCH_COURTS_REQUEST:
    const { userInput, page, filterInput } = payload;
    return {
      ...state,
      isError: false,
      isSearching: true,
      currentPage: page,
      userInput: userInput,
      filterInput: filterInput
    };

    case SEARCH_COURTS_SUCCESS:
      const { totalCourts, courtsData } = payload;
      return {
        ...state,
        isSearching: false,
        totalCourts,
        searchedCourts: [...courtsData],
      };

    case SEARCH_COURTS_FAILURE:
      return {
        ...state,
        isSearching: false,
        isError: true,
        errorMessage: payload,
        searchedCourts: [],
      };

    case SEARCH_COURT_SUCCESS:
      const courtData = payload;
      return {
        ...state,
        isSearching: false,
        selectedCourt: {...courtData},
      };

    case SEARCH_COURT_REQUEST:
      return {
        ...state,
        isError: false,
        isSearching: true,
      };

    case SEARCH_COURT_FAILURE:
      return {
        ...state,
        isSearching: false,
        isError: true,
        errorMessage: payload,
      };

    case SELECT_COURT:
      const selectedCourt = payload ? { ...payload } : null;
      return {
        ...state,
        selectedCourt,
      };

    case UNSELECT_COURT:
      return {
        ...state,
        selectedCourt: null,
      };

    case MOUSEOVER_LIST:
      const mouseoverList = payload ? { ...payload } : null;
      return {
        ...state,
        mouseoverList,
      };

    case GET_FILTER_INPUT:
      return {
        ...state,
        filterInput: {...payload}
      };

    case INIT_FILTER_INPUT:
      return  {
        ...state,
        filterInput: {
          city: '',
          district: '',
        }
      };

    default:
      return state;
  }
};

export default courtReducer;