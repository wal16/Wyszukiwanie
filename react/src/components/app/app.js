import React from 'react'
import {connect} from 'react-redux'

import {Grid, Tabs, Tab, Col, Image} from 'react-bootstrap'

import './app.css'

import Nav from '../nav/nav'
import LoginView from '../login-view/login-view'
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
          <Col xs={6} className="col-centered">
            <Image src={process.env.PUBLIC_URL + '/img/pozyczme-logo-blue2.svg'}
                   id="logo"
                   alt="Logo PożyczME"/>
            <h1 className="main-title">Masz grę planszową, która&nbsp;się kurzy?</h1>
            <h4 className="sub-title">Aplikacja PożyczME umożliwi Ci wymianę nieużywanych planszówek z&nbsp;innymi
              graczami!</h4>

            <Tabs defaultActiveKey={1} id="tab">
              <Tab eventKey={1} title="Logowanie">
                <LoginView/>
              </Tab>

              <Tab eventKey={2} title="Rejestracja">
                <RegistrationView/>
              </Tab>
            </Tabs>
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