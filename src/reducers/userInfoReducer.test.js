import reducer from './userInfoReducer';
import { FETCH_USERINFO_LOADING } from '../actions/searchUserAction';

describe('userInfo reducer', () => {
  it('handles fetching user info', () => {
    const action = { type: FETCH_USERINFO_LOADING };
    const initialState = { loading: false, userInfo: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      userInfo: null
    });

  });
});