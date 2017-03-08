import React from 'react'
import { connect } from 'react-redux'
import {Grid, PageHeader, Table, Button} from 'react-bootstrap'
import GameSearch from '../game-search/game-search'

import data from '../../data'

const GamesListView = ({ searchString }) => (
  <Grid>
    <PageHeader>Lista Gier<br/><small>Poniżej znajdziesz listę dostępnych u nas pozycji</small></PageHeader>
    <Button>Dodaj do posiadanych gier</Button>
    <Button>Dodaj do wyszukiwanych gier</Button>
    <GameSearch/>
    <Table striped>
      <thead>
      <tr>
        <th>Id</th>
        <th>Miniatura</th>
        <th>Nazwa gry</th>
        <th>Liczba graczy</th>
      </tr>
      </thead>
      <tbody>
      {
        data.games.filter(
          game => (game.name.toLowerCase()).includes(searchString.toLowerCase())
        ).map(
          game => game ? (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.image}</td>
              <td>{game.name}</td>
              <td>{game.players}</td>
            </tr>
          ) : (
            <tr>
              <td>
                Nie znaleziono gier spełniających kryteria wyszukiwania. Spróbuj wyszukać inny tytuł...
              </td>
            </tr>
          )
        )
      }
      </tbody>
    </Table>
  </Grid>
)
//TODO: FD6SL-148 poprawić ten ternary powyżej, bo nie działa
export default connect(
  state => ({
    games: state.games.gamesData,
    searchString: state.games.searchString
  })
)(GamesListView)
