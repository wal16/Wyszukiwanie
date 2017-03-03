import React from 'react'
import {connect} from 'react-redux'
import {Grid, Table, Button} from 'react-bootstrap'


const GamesListView = ({}) => (
  <Grid>
    <h1>Lista Gier</h1>

    <Table striped>
      <thead>
      <tr>
        <th>Obrazek</th>
        <th>Nazwa Gry</th>
        <th>Opis</th>
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