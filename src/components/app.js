import React from 'react'
import { connect } from 'react-redux'

import Nav from './nav/nav'
import { fetchGames } from '../state/games'
import { fetchUsers } from '../state/users'

class App extends React.Component {

  componentWillMount() {
    this.props.fetchGamesHelper(),
    this.props.fetchUsersHelper()
  }
  render() {
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames()),
    fetchUsersHelper: () => dispatch(fetchUsers())
  })
)(App)