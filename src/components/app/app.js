import React from 'react'
import {connect} from 'react-redux'
import {Jumbotron, Grid, Button} from 'react-bootstrap'

import Nav from '../nav/nav'
import {fetchGames} from '../../state/games'
import {fetchUsers} from '../../state/users'

import './app.css'


class App extends React.Component {

  componentWillMount() {
    this.props.fetchGamesHelper()
    this.props.fetchUsersHelper()
  }

  render() {
    return (

      <div className="props-children">
        <Nav/>
        <div>
          {this.props.children}
        </div>
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