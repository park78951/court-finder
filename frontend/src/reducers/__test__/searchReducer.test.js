import searchReducer from '../searchReducer';
import { searchInfo } from '../initialState'
import * as types from '@actions/types';
import * as mock from './mock';

describe('test searchReducers', () => {
  let searchState = {};

  it('should have the initial state', () => {
    searchState = searchReducer(undefined, {});
    expect(searchState).toEqual(searchInfo);
  });
  
  it('should handle SEARCH_COURTS_REQUEST', () => {
    const previousState = {...searchState};
    searchState = searchReducer(previousState, {
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
    searchState = searchReducer(previousState, {
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
    searchState = searchReducer(previousState, {
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
});