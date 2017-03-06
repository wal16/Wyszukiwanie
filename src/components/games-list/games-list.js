import React from 'react'
import {connect} from 'react-redux'
import {Grid, PageHeader, Table, Button} from 'react-bootstrap'
// import GameSearch from '../game-search/game-search'

import data from '../../data'

const GamesListView = (props) => (
  <Grid>
    <PageHeader>Lista Gier<br/><small>Poniżej znajdziesz listę dostępnych u nas pozycji</small></PageHeader>
    {/*<GameSearch/>*/}
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
        data.games.map(
          game => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.name}</td>
              <td>{game.players}</td>
            </tr>
          )
        )
      }
      </tbody>
    </Table>
  </Grid>
)

export default GamesListView
