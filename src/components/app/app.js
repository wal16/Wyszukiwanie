import React from 'react'
import {connect} from 'react-redux'

import {Grid, Tabs, Tab} from 'react-bootstrap'

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
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1"><LoginView /></Tab>
            <Tab eventKey={2} title="Tab 2"><RegistrationView/></Tab>
          </Tabs>

        </Grid>








   /*     <Grid>
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

        </Grid>*/
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