import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, PageHeader, Table, Alert, Panel, Button} from 'react-bootstrap'
import GameSearch from '../game-search/game-search'

import {fetchGames} from '../../state/games'
import { favGame, unfavGame } from '../../state/favs'

export default connect(
  state => ({
    games: state.games,
    searchString: state.search.searchString,
    favoriteGameIds: state.favoriteGameIds
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames()),
    favGame: (gamesId) => dispatch(favGame(gamesId)),
    unfavGame: (gamesId) => dispatch(unfavGame(gamesId))
  })
)(
  class GamesListView extends React.Component {
    render() {
      const {
        games,
        searchString,
        favGame,
        unfavGame
      } = this.props

      const searchResults = (
        games.data ?
          games.data.filter(
            game => (game.name.toLowerCase()).includes(searchString.toLowerCase())
          ).map(
            game => (
              <tr key={game.id}>
                <td>
                  <img src={game.image}
                         alt="Zdjęcie gry"
                           height="70"
                  />
                </td>
                <td>
                  <Link to={'game-profile/' + game.id}>
                    {game.name}
                  </Link>
                </td>
                <td>{game.players}</td>
                <td><Button onClick={() => favGame(games.id)}>Dodaj do ulubionych</Button></td>
              </tr>
            )
          ) :
          (
            <tr>
              <td colSpan="4">Oczekiwanie na dane gier...</td>
            </tr>
          )
      )

      return (
        <Grid>
          <PageHeader>Lista gier<br/>
            <small>Poniżej znajdziesz listę dostępnych planszówek</small>
          </PageHeader>

          <Panel>
            <GameSearch/>
          </Panel>
          {
            searchResults.length !== 0 ? (
              <Table striped>
                <thead>
                <tr>
                  <th></th>
                  <th>Nazwa gry</th>
                  <th>Liczba graczy</th>
                </tr>
                </thead>
                <tbody>
                {searchResults}
                </tbody>
              </Table>
            ) :
              (
                <Alert bsStyle="warning">
                  Nie znaleziono gier spełniających kryteria wyszukiwania. Spróbuj wyszukać inny tytuł...
                </Alert>
              )
          }
        </Grid>
      )
    }
  }
)