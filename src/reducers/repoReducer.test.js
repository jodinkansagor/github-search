import { FETCH_USERREPOS, FETCH_USERREPOS_LOADING } from '../actions/userReposAction';
import reducer from './repoReducer';

describe('repo reducer', () => {
  it('handles fetching user repos', () => {
    const action = { type: FETCH_USERREPOS_LOADING };
    const initialState = { loading: false, userRepos: [] };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      userRepos: []
    });
  });

  it('handles repo reducer', () => {
    const action = { 
      type: FETCH_USERREPOS,
      payload:  [{ id: '123', name: 'adventure' }, { id: '234', name: 'good times' }]
    };
    const initialState = { loading: true, userRepos: [] };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      userRepos: [{ id: '123', name: 'adventure' }, { id: '234', name: 'good times' }]
    });
  });
});
