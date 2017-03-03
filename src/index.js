import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import store from './store'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import GameProfileView from './components/game-profile/game-profile'
import GamesListView from './components/games-list/games-list'
import UsersListView from './components/users-list/users-list-view'
import UserProfileView from './components/user-profile/user-profile-view'


ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/games-list" component={GamesListView}/>
          <Route path="/game-profile/:id" component={GameProfileView}/>
          <Route path="/users-list" component={UsersListView}/>
          <Route path="/user-profile/:id" component={UserProfileView}/>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);