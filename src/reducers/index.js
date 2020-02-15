import { combineReducers } from 'redux';
import user from './userInfoReducer';
import repo from './repoReducer'; 

export default combineReducers({
  user, 
  repo
});
