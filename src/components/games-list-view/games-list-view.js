import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Table, Alert, Panel, Row, Col, Image, Button, Glyphicon} from 'react-bootstrap'
import GameSearch from '../game-search/game-search'
import GameRanges from '../game-ranges/game-ranges'
import './games-list-view.css'

import {fetchGames} from '../../state/games'
import {favGame, unfavGame} from '../../state/favs'


export default connect(
  state => ({
    games: state.games,
    searchString: state.search.searchString,
    changeRange: state.range.changeRange,
    favoriteGameIds: state.favs.favoriteGameIds,
    userId: state.session.data.userId,
    accessToken: state.session.data.id
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames()),
    favGame: (gameId, userId, accessToken) => dispatch(favGame(gameId, userId, accessToken)),
    unfavGame: (gameId, userId, accessToken) => dispatch(unfavGame(gameId, userId, accessToken))
  })
)(
  class GamesListView extends React.Component {
    render() {
      const {
        games,
        params,
        searchString,
        changeRange,
        favGame,
        unfavGame,
        favoriteGameIds,
        userId,
        accessToken
      } = this.props

      const searchResults = (
        games.data ?
          games.data.filter(
            game => (game.name.toLowerCase()).includes(searchString.toLowerCase()) &&
            ((changeRange.min <= game.playersMin) && (game.playersMax <= changeRange.max))
          ).map(
            game => {
              const currentGame = games.data.find(
                game => game.id === parseInt(params.gameId, 10))

              const fav = favoriteGameIds.find(fav => fav.gameId === game.id)

              const favId = (fav && fav.favId) || undefined

              return (
                <tr key={game.id}>
                  <td>
                    <div className="game-image__wrapper">
                      <Image className="game-image__game-list"
                             src={game.image}
                             alt="Zdjęcie gry"
                      />
                    </div>
                  </td>
                  <td>
                    <Link to={'game-profile/' + game.id}>
                      {game.name}
                    </Link>
                  </td>
                  <td>{game.playersMin} - {game.playersMax}</td>
                  <td>
                    {
                      fav !== undefined ?
                        (
                          <Button bsSize=""
                                  bsStyle="custom__game-card"
                                  onClick={() => unfavGame(favId, userId, accessToken)}>
                            <Glyphicon glyph="heart"
                                       className="glyph"/>
                          </Button>
                        ) :
                        (
                          <Button bsSize=""
                                  bsStyle="custom__game-card"
                                  onClick={() => favGame(currentGame.id, userId, accessToken)}>
                            <Glyphicon glyph="heart-empty"
                                       className="glyph"/>
                          </Button>
                        )
                    }
                  </td>
                </tr>
              )
            }
          ) :
          (
            <tr>
              <td colSpan="4">Oczekiwanie na dane gier...</td>
            </tr>
          )
      )

      return (
        <Grid>
          <Panel header="Wyszukiwarka gier"
                 className="panel-body__game-list">
            <Row className="row-search__game-list">
              <Col className="col-search__game-list" xs={12} sm={6}>
                <div className="input-group">
                  <div className="input-group-addon">
                    <Glyphicon glyph="search"
                               className="glyph"/>
                  </div>
                                    <GameSearch/>
                </div>
              </Col>
              <Col className="col-search__game-list" xs={12} sm={4}>
                <GameRanges/>
                <Button bsStyle="custom__game-list">
                  <Glyphicon glyph="repeat"
                             className="glyph"/>
                </Button>

              </Col>
            </Row>
            {
              searchResults.length !== 0 ? (
                  <Table>
                    <thead>
                    <tr>
                      <th></th>
                      <th>Nazwa gry</th>
                      <th>Liczba graczy</th>
                      <th>Dodaj do ulubionych</th>
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
          </Panel>

        </Grid>
      )
    }
  }
)