import React from 'react'
import {connect} from 'react-redux'

import {Grid, Col} from 'react-bootstrap'

import './app.css'

import Nav from '../nav/nav'
import LoginView from '../login-view'
import RegistrationView from '../registration-view/registration-view'
import {fetchGames} from '../../state/games'
import {fetchUsers} from '../../state/users'
import {clearLoginErrors} from '../../state/session'




class App extends React.Component {

  componentWillMount() {
    this.props.clearLoginErrors()
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
          <div className="enter">
          <img src={process.env.PUBLIC_URL + '/img/pozyczme-logo-blue2.svg'}
               alt="Logo PożyczME"/>
          <h1>Witamy na naszej stronie</h1>
</div>
          <Col lg={6}>
            <RegistrationView/>
          </Col>

          <Col lg={6}>
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
    clearLoginErrors: () => dispatch(clearLoginErrors()),
    fetchGamesHelper: () => dispatch(fetchGames()),
    fetchUsersHelper: () => dispatch(fetchUsers())
  })
)(App)