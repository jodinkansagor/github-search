import React from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import { isLoadingUserInfo, getFetchedUserInfo } from '../selectors/userInfoSelector';

const UserInfo = () => {
  const loading = useSelector(isLoadingUserInfo);
  const userInfo = useSelector(getFetchedUserInfo);

  if(loading) return <Loading />;

  const toRender = userInfo ? < section >
    <img src={userInfo.avatar_url} />
    <h3>{userInfo.login}</h3>
    <h4>Following: {userInfo.following}</h4>
    <h4>Followers: {userInfo.followers}</h4>
    <a href={userInfo.url}>Go to {userInfo.login}&apos;s Github</a>
  </section > : <img style={{ height: '100vh', display: 'block', margin: 'auto' }} src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' />;

  return (
    <>
      {toRender}
    </>
  );
};

export default UserInfo;
