import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFetchedRepoInfo } from '../selectors/repoSelector';
import Repo from './Repo';


const UserRepos = () => {
  const userRepos = useSelector(getFetchedRepoInfo);

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
  repo: PropTypes.any
};

export default UserRepos;
