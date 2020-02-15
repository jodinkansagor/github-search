import { getUserRepos } from '../services/githubApi';

export const FETCH_USERREPOS_LOADING = 'FETCH_USERREPOS_LOADING';
export const FETCH_USERREPOS = 'FETCH_USERREPOS';

export const fetchUserRepos = userName => dispatch => {
  dispatch({ type: FETCH_USERREPOS_LOADING });
  return getUserRepos(userName)
    .then(userRepos => dispatch({
      type: FETCH_USERREPOS,
      payload: userRepos
    }));
};
