import { 
  COMPLETE_SEARCH_COURTS,
  ADD_COURTS,
  SELECT_COURT,
  SEARCHING_COURTS,
  REMOVE_SELECT_COURT,
  CATCHING_ERROR,
  OPEN_COURTADDITION,
  CLOSE_COURTADDITION
} from '../../config/constants';
import { filterCourtsByInput } from '../myUtil';
import courtsApi from '../../apis';

export const searchingCourts = () => ({
  type: SEARCHING_COURTS,
  payload: {
    isError: false,
    isSearching: true
  }
});

export const catchErrorOnSearch = () => ({
  type: CATCHING_ERROR,
  payload: {
    isSearching: false,
    isError: true,
    searchedCourts: []
  }
});

export const addCourts = addedInfo => ({
  type: ADD_COURTS,
  payload: {
    addedInfo
  }
});

export const selectCourt = selectedCourt => ({
  type: SELECT_COURT,
  payload: selectedCourt
});

export const removeSelectedCourt = () => ({
  type: REMOVE_SELECT_COURT,
  payload: null
});

export const openCourtAddtionForm = () => ({
  type: OPEN_COURTADDITION,
  payload: true
});

export const closeCourtAddtionFomr = () => ({
  type: CLOSE_COURTADDITION,
  payload: false
});

export const searchCourtsWithSuccess = userInput => 
  async dispatch => {
    try{
      dispatch(searchingCourts());

      const fetchedData = await courtsApi.get('/seoulCourt.json');
      const courtsInfo = fetchedData.data.body;
      const courtsByUserInput = filterCourtsByInput({ userInput, courtsInfo });

      dispatch({
        type: COMPLETE_SEARCH_COURTS,
        payload: {
          searchedCourts: courtsByUserInput,
          isSearching: false
        }
      });
    } catch(err) {
      console.log(err.message);
      dispatch(catchErrorOnSearch());
    }
  };