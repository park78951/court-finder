import inputReducer from '../inputReducer';
import { initInputInfo } from '../initialState'
import * as types from '@actions/types';
import * as mock from './mock';

describe('test inputReducer', () => {
  let inputState = {};

  it('should have the initial state', () => {
    inputState = inputReducer(undefined, {})
    expect(inputState).toEqual(initInputInfo);
  });

  it('should handle GET_FILTER_INPUT', () => {
    const previousState = {...inputState};
    inputState = inputReducer(previousState, {
      type: types.GET_FILTER_INPUT,
      payload: {
        ...mock.newInput.filterInput
      }
    });

    expect(inputState).toEqual({
      ...previousState,
      filterInput: {
        ...mock.newInput.filterInput,
      }
    });
  });

  it('should handle GET_SEARCH_INPUT', () => {
    const previousState = {...inputState};
    inputState = inputReducer(previousState, {
      type: types.GET_SEARCH_INPUT,
      payload: mock.newInput.userInput,
    });

    expect(inputState).toEqual({
      ...previousState,
      userInput: mock.newInput.userInput,
    });
  });

  it('should handle INIT_FILTER_INPUT', () => {
    const previousState = {...inputState};
    inputState = inputReducer(previousState, {
      type: types.INIT_FILTER_INPUT,
    });

    expect(inputState).toEqual({
      ...previousState,
      filterInput: {},
    });
  });
})