import { fetchUserRepos, FETCH_USERREPOS_LOADING, FETCH_USERREPOS } from './userReposAction';

jest.mock('../services/githubApi.js');

describe('fetch user repos action', () => {
  it('gets user repos from the api', () => {
    const dispatch = jest.fn();
    const action = fetchUserRepos('jodi');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_USERREPOS_LOADING });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USERREPOS,
          payload: [
            { id: '123', name: 'adventure' },
            { id: '234', name: 'good times' }
          ]
        });
      });
  });
});
