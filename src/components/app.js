import React from 'react'
import {connect} from 'react-redux'

import Nav from './nav/nav'
import LoginView from './login'
import {fetchGames} from '../state/games'
import {fetchUsers} from '../state/users'

class App extends React.Component {

  componentWillMount() {
    this.props.fetchGamesHelper()
    this.props.fetchUsersHelper()
  }

  render() {
    const {
      session
    } = this.props

    return session.session ? (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    ) : <LoginView />
  }
}

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames()),
    fetchUsersHelper: () => dispatch(fetchUsers())
  })
)(App)