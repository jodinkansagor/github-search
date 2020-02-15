import React from 'react';
import PropTypes from 'prop-types';
import styles from './Repos.css';

const Repo = (repo) => (
  <section className={styles.repo}>
    <a href={repo.html_url}><h1>{repo.name}</h1></a>
  </section>
);

Repo.propTypes = {
  repo: PropTypes.any
};

export default Repo;
