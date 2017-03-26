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
              const fav = favoriteGameIds.find(fav => fav.gameId === game.id)

              const favId = (fav && fav.favId) || undefined

              return (
                <tr className="table-tr__game-list"
                    key={game.id}>
                  <td className="table-td__game-list table__game-list-empty">
                    <div className="game-image__wrapper">
                      <Image className="game-image__game-list"
                             src={game.image}
                             alt="Zdjęcie gry"
                      />
                    </div>
                  </td>
                  <td className="table-td__game-list">
                    <Link to={'game-profile/' + game.id}>
                      {game.name}
                    </Link>
                  </td>
                  <td className="table-td__game-list">
                    {game.playersMin} - {game.playersMax}
                  </td>
                  <td className="table-td__game-list">
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
                                  onClick={() => favGame(game.id, userId, accessToken)}>
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
              <td>
                Oczekiwanie na dane gier...
              </td>
            </tr>
          )
      )

      return (
        <Grid>
          <Panel header="Wyszukiwarka gier"
                 className="panel-body__game-list">
            <Row className="row-search__game-list">
              <Col className="col-search__game-list" xs={12} sm={5} smOffset={1}>
                <div className="input-group">
                  <div className="input-group-addon">
                    <Glyphicon glyph="search"
                               className="glyph"/>
                  </div>
                  <GameSearch/>
                </div>
              </Col>
              <Col className="col-search__game-list" xs={8} sm={3} mdOffset={1}>
                <GameRanges/>
              </Col>
              <Col className="col-search__game-list" xs={2} sm={2}>
                <Button bsStyle="custom__game-list">
                  <Glyphicon glyph="repeat"
                             className="glyph"/>
                </Button>
              </Col>
            </Row>
            <div className="panel-body-table__game-list">
              {
                searchResults.length !== 0 ? (
                    <Table className="table__game-list table-hover">
                      <thead className="table-head__game-list">
                      <tr className="table-tr__game-list">
                        <th className="table__game-list-empty"/>
                        <th className="table-th__game-list">Nazwa gry</th>
                        <th className="table-th__game-list">Liczba graczy</th>
                        <th className="table-th__game-list">Dodaj do ulubionych</th>
                      </tr>
                      </thead>
                      <tbody className="table-body__game-list">
                      {searchResults}
                      </tbody>
                    </Table>
                  ) :
                  (
                    <Alert bsStyle="">
                      Nie znaleziono gier spełniających kryteria wyszukiwania. Spróbuj wyszukać inny tytuł...
                    </Alert>
                  )
              }
            </div>
          </Panel>
        </Grid>
      )
    }
  }
)