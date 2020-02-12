import courtReducer from '../courtReducer';
import { searchInfo } from '../initialState'
import * as types from '@actions/types';
import * as mock from './mock';

describe('test courtReducer', () => {
  let searchState = {};

  it('should have the initial state', () => {
    searchState = courtReducer(undefined, {});
    expect(searchState).toEqual(searchInfo);
  });
  
  it('should handle SEARCH_COURTS_REQUEST', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SEARCH_COURTS_REQUEST,
      payload: {...mock.newInput}
    });

    expect(searchState).toEqual({
      ...previousState,
      currentPage: 1,
      isSearching: true,
      isError: false,
    });
  });

  it('should handle SEARCH_COURTS_SUCCESS with searchedCourts', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SEARCH_COURTS_SUCCESS,
      payload: {
        ...mock.newCourtsData
      }
    });

    expect(searchState).toEqual({
      ...previousState,
      totalCourts: mock.newCourtsData.totalCourts,
      searchedCourts: [...mock.newCourtsData.courtsData],
      isSearching: false,
    });
  });

  it('should handle SEARCH_COURTS_FAILURE with error message', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SEARCH_COURTS_FAILURE,
      payload: mock.errorMessage,
    });

    expect(searchState).toEqual({
      ...previousState,
      isError: true,
      isSearching: false,
      searchedCourts: [],
      errorMessage: mock.errorMessage,
    });
  });

  it('should handle SELECT_COURT', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.SELECT_COURT,
      payload: mock.selectedCourtsData,
    });

    expect(searchState).toEqual({
      ...previousState,
      selectedCourt: mock.selectedCourtsData,
    });
  });

  it('should handle UNSELECT_COURT', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.UNSELECT_COURT,
    });

    expect(searchState).toEqual({
      ...previousState,
      selectedCourt: null,
    });
  });

  it('should handle MOUSEOVER_LIST when mouse over list', () => {
    const previousState = {...searchState};
    searchState = courtReducer(previousState, {
      type: types.MOUSEOVER_LIST,
      payload: mock.selectedCourtsData,
    });

    expect(searchState).toEqual({
      ...previousState,
      mouseoverList: mock.selectedCourtsData,
    });
  });
});