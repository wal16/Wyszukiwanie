import React from 'react'
import {connect} from 'react-redux'
import {Grid, Table, Button} from 'react-bootstrap'

import data from '../../data'

const GamesListView = (props) => (
  <Grid>
    <h1>Lista Gier</h1>

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
