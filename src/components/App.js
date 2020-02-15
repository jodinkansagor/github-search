import React from 'react';
import NameSearch from './NameSearch';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos';
import styles from './App.css'


export default function App() {
  return (
    <section className={styles.Page}>
      <NameSearch />
      <UserInfo />
      <UserRepos />
    </section>
  );
}
