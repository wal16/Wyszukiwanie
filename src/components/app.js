import React from 'react'
import {connect} from 'react-redux'

import Nav from './nav/nav'
import LogInView from './log-in'
import {fetchGames} from '../state/games'
import {fetchUsers} from '../state/users'

class App extends React.Component {

  componentWillMount() {
    this.props.fetchGamesHelper()
    this.props.fetchUsersHelper()
  }

  render() {
    return /*session.id ?*/ (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    ) /*: <LogInView /> TODO: ternary that detects if user is logged in ready to enable*/
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames()),
    fetchUsersHelper: () => dispatch(fetchUsers())
  })
)(App)