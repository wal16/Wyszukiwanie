import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, PageHeader, Table, Alert, Panel, Row, Col, Button} from 'react-bootstrap'
import GameSearch from '../game-search/game-search'
import GameRanges from '../game-ranges/game-ranges'

import { fetchGames } from '../../state/games'
import { favGame, unfavGame } from '../../state/favs'

export default connect(
  state => ({
    games: state.games,
    searchString: state.search.searchString,
    changeRange: state.range.changeRange,
    favoriteGameIds: state.favs.favoriteGameIds,
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames()),
    favGame: (gameId) => dispatch(favGame(gameId)),
    unfavGame: (gameId) => dispatch(unfavGame(gameId))
  })
)(
  class GamesListView extends React.Component {
    render() {
      const {
        games,
        searchString,
        changeRange,
        favGame,
        unfavGame,
        favoriteGameIds
      } = this.props

      const searchResults = (
        games.data ?
          games.data.filter(
            game => (game.name.toLowerCase()).includes(searchString.toLowerCase()) &&
            ((changeRange.min <= game.playersMin) && (game.playersMax <= changeRange.max))
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
                <td>{game.playersMin} - {game.playersMax}</td>
                <td>
                  {
                    favoriteGameIds.includes(game.id) ?
                      <Button
                        bsStyle="success"
                        onClick={() => unfavGame(game.id)}>
                        Fav
                      </Button> :
                      <Button
                        bsStyle="default"
                        onClick={() => favGame(game.id)}>
                        Fav
                      </Button>
                  }
                </td>
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
            <h4>Wyszukiwarka gier</h4>
            <Row>
              <Col xs={5}>
                <GameSearch/>
              </Col>
              <Col xs={5}>
                <GameRanges/>
              </Col>
            </Row>
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