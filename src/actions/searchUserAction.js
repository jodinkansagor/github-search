import { getUserInfo } from '../services/githubApi';

export const FETCH_USERINFO_LOADING = 'FETCH_USERINFO_LOADING';
export const FETCH_USERINFO = 'FETCH_USERINFO';
export const fetchUserInfo = userName => dispatch => {
  dispatch({ type: FETCH_USERINFO_LOADING });
  return getUserInfo(userName)
    .then(userInfo => dispatch({
      type: FETCH_USERINFO,
      payload: userInfo
    }));
};
