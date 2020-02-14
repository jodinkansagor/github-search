import React, { useEffect } from 'react';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingUserInfo, getFetchedUserInfo } from '../selectors/userInfoSelector';
import { fetchUserInfo } from '../actions/searchUserAction';

const UserInfo = () => {
  // const dispatch = useDispatch();
  const loading = useSelector(isLoadingUserInfo);
  const userInfo = useSelector(getFetchedUserInfo);

  // if(loading) return <Loading />;

  return (
    <section>
      <img src = {userInfo.avatar_url} />
      <h3>{userInfo.login}</h3>
      <h4>Following: {userInfo.following}</h4>
      <h4>Followers: {userInfo.followers}</h4>
      <a href={userInfo.url}>Go to {userInfo.login}&apos;s Github</a>
    </section>
  );
};

export default UserInfo;
