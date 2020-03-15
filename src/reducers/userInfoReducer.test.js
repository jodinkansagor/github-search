import reducer from './userInfoReducer';
import { FETCH_USERINFO_LOADING, FETCH_USERINFO } from '../actions/searchUserAction';

describe('userInfo reducer', () => {
  it('handles fetching user info loading', () => {
    const action = { type: FETCH_USERINFO_LOADING };
    const initialState = { loading: false, userInfo: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      userInfo: null
    });

  });

  it('handles fetching user info', () => {
    const action = {
      type: FETCH_USERINFO,
      payload: {
        id: 1,
        name: 'jbj'
      }
    };
    const initialState = { loading: true, userInfo: null };
    const newState = reducer(initialState, action)

    expect(newState).toEqual({
      loading: false,
      userInfo:  {
        id: 1,
        name: 'jbj'
      }
    });
  });
});

