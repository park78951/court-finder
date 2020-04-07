import userReducer from '../userReducer';
import { userState } from '../initialState';
import * as types from '@actions/types';
import * as mock from './mock';

describe('test userRedcuer', () => {
  let testUserState = {};

  it('should get the initial state', () => {
    testUserState = userReducer(undefined, {});
    expect(testUserState).toEqual(userState);
  });

  it('should change states to request user information', () => {
    testUserState = userReducer(testUserState, {
      type: types.LOG_IN_REQUEST,
      payload: {
        userId: mock.userMock.userId,
      }
    });

    expect(testUserState).toEqual({
      ...testUserState,
      isLogginIn: true,
      userId: mock.userMock.userId,
    });
  });

  it('should change states to get user information', () => {
    testUserState = userReducer(testUserState, {
      type: types.LOG_IN_SUCCESS,
      payload: {...mock.userMock},
    });

    expect(testUserState).toEqual({
      ...testUserState,
      ...mock.userMock,
      isLogginIn: false,
      isLoggedIn: true,
    });
  });

  it('should change states to get error message without user information', () => {
    testUserState = userReducer(testUserState, {
      type: types.LOG_IN_FAILURE,
      payload: 'Cannot get user information',
    });

    expect(testUserState).toEqual({
      ...testUserState,
      isLogginIn: false,
      errorMsg: 'Cannot get user information',
    });
  });

  it('should change states to auto log in', () => {
    testUserState = userReducer(testUserState, {
      type: types.AUTO_LOG_IN,
      payload: {
        userId: mock.userMock.userId,
        nickname: mock.userMock.nickname,
      },
    });

    expect(testUserState).toEqual({
      ...testUserState,
      userId: mock.userMock.userId,
      nickname: mock.userMock.nickname,
      isLoggedIn: true,
    });
  });
});