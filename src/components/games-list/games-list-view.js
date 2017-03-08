import React from 'react'
import {connect} from 'react-redux'
import {Grid, PageHeader, Table} from 'react-bootstrap'

import {fetchGames} from '../../state/games'

export default connect(
  state => ({
    games: state.games
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames())
  })
)(
  class GamesListView extends React.Component {
    render() {
      const {games} = this.props

      return (
        <Grid>
          <PageHeader>Lista Gier<br/>
            <small>Poniżej znajdziesz listę dostępnych u nas pozycji</small>
          </PageHeader>

          <Table striped>
            <thead>
            <tr>
              <th>Id</th>
              <th>Nazwa gry</th>
              <th>Liczba graczy</th>
            </tr>
            </thead>
            <tbody>
            {
              games.data ?
                games.data.map(
                  game => (
                    <tr key={game.id}>
                      <td>{game.id}</td>
                      <td>{game.name}</td>
                      <td>{game.players}</td>
                    </tr>
                  )
                ) : <tr>
                <td>Waiting for games data...</td>
              </tr>
            }
            </tbody>
          </Table>
        </Grid>
      )
    }
  }
)