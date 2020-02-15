import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NameSearch from './NameSearch';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos';


export default function App() {
  return (
    <>
      <NameSearch />
      <UserInfo />
      <UserRepos />
    </>
  );
}
