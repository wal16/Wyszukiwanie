import React from 'react'
import { connect } from 'react-redux'

import Nav from './nav/nav'
import { fetchGames } from '../state/games'

class App extends React.Component {

  componentWillMount() {
    this.props.fetchGamesHelper()
  }
  render() {
    return (
      <div>
        <Nav/>
        {props.children}
      </div>
    )
  }

}

export default connect(
  state => ({}),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames())
  })
)(App)