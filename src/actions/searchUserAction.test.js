import { fetchUserInfo, FETCH_USERINFO, FETCH_USERINFO_LOADING } from './searchUserAction';

jest.mock('../services/githubApi.js');

describe('fetch userinfo action', () => {
  it('gets user info from the api', () => {
    const dispatch = jest.fn();
    const action = fetchUserInfo('jodi');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_USERINFO_LOADING });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USERINFO,
          payload: {
            'login': 'jodinkansagor',
            'id': 51837529
          }
        });
      });
  });
});
