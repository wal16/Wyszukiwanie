import React from 'react'
import {connect} from 'react-redux'
import {Jumbotron, Grid, Button} from 'react-bootstrap'

import Nav from './nav/nav'
import {fetchGames} from '../state/games'
import {fetchUsers} from '../state/users'

class App extends React.Component {

  componentWillMount() {
    this.props.fetchGamesHelper()
    this.props.fetchUsersHelper()
  }

  render() {
    return (
      <div>
        <Nav/>
        {this.props.children}
        <Grid>
          <Jumbotron>
            <h1>Masz grę planszową, która&nbsp;się kurzy?</h1>
            <h2>Aplikacja PożyczME umożliwi Ci&nbsp;
              wymianę nieużywanych planszówek z&nbsp;innymi graczami!</h2>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </Grid>
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