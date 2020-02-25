import userReducer from '../userReducer';
import { userInfo } from '../initialState';
import * as types from '@actions/types';
import * as mock from './mock';

describe('test userRedcuer', () => {
  let userState = {};

  it('should get the initial state', () => {
    userState = userReducer(undefined, {});
    expect(userState).toEqual(userInfo);
  });

  it('should request user information', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.LOG_IN_REQUEST,
    });

    expect(userState).toEqual({
      ...previousState,
      isLogginIn: true,
    });
  });

  it('should get user information', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.LOG_IN_SUCCESS,
      payload: mock.userMock,
    });

    expect(userState).toEqual({
      ...previousState,
      ...mock.userMock,
      isLogginIn: false,
      isLoggedIn: true,
    });
  });

  it('should get error message without user information', () => {
    const previousState = {...userState};
    userState = userReducer(previousState, {
      type: types.LOG_IN_FAILURE,
      payload: 'Cannot get user information',
    });

    expect(userState).toEqual({
      ...previousState,
      isLogginIn: false,
      errorMsg: 'Cannot get user information',
    });
  });
});