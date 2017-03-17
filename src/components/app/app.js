import React from 'react'
import {connect} from 'react-redux'

import {Grid, Col} from 'react-bootstrap'

import Nav from '../nav/nav'
import LoginView from '../login-view'
import RegistrationView from '../registration-view/registration-view'
import {fetchGames} from '../../state/games'
import {fetchUsers} from '../../state/users'

import './app.css'


class App extends React.Component {

  componentWillMount() {
    this.props.fetchGamesHelper()
    this.props.fetchUsersHelper()
  }

  render() {
    const {
      session
    } = this.props

    return session.data !== null ? (
      <div className="props-children">
        <Nav/>
        <div>
          {this.props.children}
        </div>
      </div>
    ) :
    (
      <Grid>
        <Col xs={12} sm={6} md={6}>

          <RegistrationView/>
          <LoginView />

        </Col>
      </Grid>


    )

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