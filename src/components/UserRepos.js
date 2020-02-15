import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFetchedRepoInfo } from '../selectors/repoSelector';
import Repo from './Repo';
import styles from './Repos.css';


const UserRepos = () => {
  const userRepos = useSelector(getFetchedRepoInfo);

  const reposElements = userRepos.map(repo => (
    <li className={styles.repoListItem} key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <section className={styles.repos}>
      <h1>Repositories</h1>
      <ul>
        {reposElements}
      </ul>
    </section>
  );

};

UserRepos.propTypes = {
  repo: PropTypes.any
};

export default UserRepos;
