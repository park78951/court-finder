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

  it('should open nickname changer', () => {
    const previousState = {...uiControllerState};
    uiControllerState = uiReducer(previousState, {
      type: types.OPEN_NICKNAME_CHANGER,
    });

    expect(uiControllerState).toEqual({
      ...previousState,
      isOpenNicknameChanger: true,
    });
  });

  it('should close nickname changer', () => {
    const previousState = {...uiControllerState};
    uiControllerState = uiReducer(previousState, {
      type: types.CLOSE_NICKNAME_CHANGER,
    });

    expect(uiControllerState).toEqual({
      ...previousState,
      isOpenNicknameChanger: false,
    });
  });
})