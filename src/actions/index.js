import { 
  SEARCH_COURTS_SUCCESS,
  ADD_COURTS,
  SELECT_COURT,
  SEARCH_COURTS_REQUEST,
  REMOVE_SELECT_COURT,
  SEARCH_COURTS_FAILURE,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION,
  TOGGLE_SIDEBAR,
  USER_INPUT,
  TOGGLE_FILTER,
  ACTIVE_BUTTON,
  SEND_FILTER_DATA,
  INIT_FILTER_DATA,
  DELETE_COURTS
} from './types';
import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../apis';

const startSearchingCourts = () => ({
  type: SEARCH_COURTS_REQUEST,
});

export const completeSearchCourts = courtsData => ({
  type: SEARCH_COURTS_SUCCESS,
  payload: courtsData,
});

export const catchErrorOnSearch = error => ({
  type: SEARCH_COURTS_FAILURE,
  payload: error,
});

export const deleteSearchedCourts = () => ({
  type: DELETE_COURTS,
});

export const addCourts = addedInfo => ({
  type: ADD_COURTS,
  payload: addedInfo,
});

export const selectCourt = selectedCourt => ({
  type: SELECT_COURT,
  payload: selectedCourt,
});

export const removeSelectedCourt = () => ({
  type: REMOVE_SELECT_COURT,
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER,
  payload: isOpen,
});

export const openCourtAddtionForm = () => ({
  type: OPEN_COURTADDITION,
});

export const closeCourtAddtionForm = () => ({
  type: CLOSE_COURTADDITION,
});

const getUserInput = input => ({
  type: USER_INPUT,
  payload: input,
});

export const getActiveBtnName = btnName => ({
  type: ACTIVE_BUTTON,
  payload: btnName,
});

export const getFilterData = filterData => ({
  type: SEND_FILTER_DATA,
  payload: filterData,
});

export const removeFilterData = () => ({
  type: INIT_FILTER_DATA,
});

export const searchCourts = (userInput, filterData) => 
  async dispatch => {
    dispatch(getUserInput(userInput));
    try{
      dispatch(startSearchingCourts());

      const fetchedData = await courtsApi.get('/seoulCourt.json');
      const courtsInfo = fetchedData.data.body;
      let courtsByUserInput = filterCourtsByInput({ 
        userInput, 
        courtsInfo, 
        filterData 
      });
      dispatch({
        type: SEARCH_COURTS_SUCCESS,
        payload: courtsByUserInput
      });
    } catch(err) {
      console.log(err.message);
      dispatch(catchErrorOnSearch());
    }
  };