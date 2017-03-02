import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import GameProfileView from './components/game-profile/game-profile'
import GamesListView from './components/games-list/games-list'
import UsersListView from './components/users-list/users-list'
import UserProfileView from './components/user-profile/user-profile'



ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/games-list/" component={GamesListView}/>
        <Route path="/game-profile/:id" component={GameProfileView}/>
        <Route path="/users-list" component={UsersListView}/>
        <Route path="/user-profile" component={UserProfileView}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);