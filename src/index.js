import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import GameProfileView from './components/game-profile/game-profile'
import UsersListView from './components/users-list/users-list'
import UserProfileView from './components/user-profile/user-profile-view'



ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/game-profile" component={GameProfileView}/>
        <Route path="/users-list" component={UsersListView}/>
        <Route path="/user-profile/:id" component={UserProfileView}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);