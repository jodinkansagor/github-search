import React from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';
import { isLoadingUserInfo, getFetchedUserInfo } from '../selectors/userInfoSelector';
import styles from './UserInfo.css';

const UserInfo = () => {
  const loading = useSelector(isLoadingUserInfo);
  const userInfo = useSelector(getFetchedUserInfo);

  if (loading) return <Loading />;

  const toRender = userInfo ?
    <section>
      <section className={styles.topline}>
        <img className={styles.avatar} src={userInfo.avatar_url} />
        <section className={styles.words}>
          <h3>Username: {userInfo.login}</h3>
          <section className={styles.follow}>
            <h4>Following: {userInfo.following}</h4>
            <h4>Followers: {userInfo.followers}</h4>
          </section>
          <a href={userInfo.url}>Go to {userInfo.login}&apos;s Github</a>
        </section>
      </section>
    </section > : <img style={{ height: '100vh', display: 'block', margin: 'auto' }} src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' />;

  return (
    <section className={styles.UserInfo}>
      {toRender}
    </section>
  );
};

export default UserInfo;
