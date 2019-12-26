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
  DELETE_COURTS,
  LIST_OVER_COURT,
  LIST_OUT_COURT,
} from './types';

export const startSearchingCourts = (userInput, filterData) => ({
  type: SEARCH_COURTS_REQUEST,
  payload: {
    userInput,
    filterData,
  }
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

export const getUserInput = input => ({
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

export const getListOverCourt = listOverCourt => ({
  type: LIST_OVER_COURT,
  payload: listOverCourt
});

export const removeListOverCourt = () => ({
  type: LIST_OUT_COURT,
});