import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoadingUserRepos, getFetchedRepoInfo } from '../selectors/repoSelector';
import Loading from './Loading';


const UserRepos = () => {
  const loading = useSelector(isLoadingUserRepos);
  const userRepos = useSelector(getFetchedRepoInfo);

  if (loading) return <Loading />;

  const reposElements = userRepos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <>
      {reposElements}
    </>
  );

};

UserRepos.propTypes = {
  repo: PropTypes.shape
};

export default UserRepos;
