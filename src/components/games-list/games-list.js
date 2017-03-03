import React from 'react'
import {connect} from 'react-redux'
import {Grid, Table, Button} from 'react-bootstrap'


const GamesListView = ({}) => (
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

      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      </tbody>
    </Table>
  </Grid>
)

export default GamesListView