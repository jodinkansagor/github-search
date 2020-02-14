import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NameSearch from './NameSearch';
import UserInfo from './UserInfo';


export default function App() {
  return (
    <Router>
      <NameSearch />
      <Switch>
        <Route exact path='/' component={UserInfo} />
      </Switch>
    </Router>
  );
}
