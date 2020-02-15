import React from 'react';
import PropTypes from 'prop-types';

const Repo = (repo) => (
  <section>
    <h1>{repo.name}</h1>
    <a href={repo.html_url}>Go to the Repo!</a>
  </section>
);

Repo.propTypes = {
  repo: PropTypes.any
};

export default Repo;
