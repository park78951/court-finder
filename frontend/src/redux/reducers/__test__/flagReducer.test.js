import uiReducer from '../uiReducer';
import { initUIToggleInfo } from '../initialState'
import * as types from '@actions/types';

describe('test uiReducer', () => {
  let uiControllerState = {};

  it('should have the initial state', () => {
    uiControllerState = uiReducer(undefined, {})
    expect(uiControllerState).toEqual(initUIToggleInfo);
  });

  it('should handle TOGGLE_SIDEBAR', () => {
    const previousState = {...uiControllerState};
    uiControllerState = uiReducer(previousState, {
      type: types.TOGGLE_SIDEBAR,
    });

    expect(uiControllerState).toEqual({
      ...previousState,
      isSidebarHidden: !previousState.isSidebarHidden
    });
  });

  it('should handle OPEN_COURTADDITION', () => {
    const previousState = {...uiControllerState};
    uiControllerState = uiReducer(previousState, {
      type: types.OPEN_COURTADDITION,
    });

    expect(uiControllerState).toEqual({
      ...previousState,
      courtAdditionuiController: true,
    });
  });

  it('should handle INIT_FILTER_INPUT', () => {
    const previousState = {...uiControllerState};
    uiControllerState = uiReducer(previousState, {
      type: types.CLOSE_COURTADDITION,
    });

    expect(uiControllerState).toEqual({
      ...previousState,
      courtAdditionuiController: false,
    });
  });
})