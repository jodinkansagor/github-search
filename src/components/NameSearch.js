import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../actions/searchUserAction';
import { fetchUserRepos } from '../actions/userReposAction';

const NameSearch = () => {

  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUserInfo(userName));
    dispatch(fetchUserRepos(userName));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userName} onChange={({ target }) => setUserName(target.value)} />
      <button>Submit</button>
    </form>
  )


}
  ;

NameSearch.propTypes = {};

export default NameSearch;