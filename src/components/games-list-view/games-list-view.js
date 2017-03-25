import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, PageHeader, Table, Alert, Panel, Row, Col, Image, Glyphicon} from 'react-bootstrap'
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
                <tr key={game.id}>
                  <td>
                    <img className="thumb"
                         src={game.image}
                         alt="Zdjęcie gry"
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
                      fav !== undefined ?
                        (
                          <img
                            className="fav"
                            role="persentation"
                            src={process.env.PUBLIC_URL + '/img/favorite-remove.png'}
                            onClick={() => unfavGame(favId, userId, accessToken)}
                          />
                        ) :
                        (
                          <img
                            className="fav"
                            role="persentation"
                            src={process.env.PUBLIC_URL + '/img/favorite-add.png'}
                            onClick={() => favGame(game.id, userId, accessToken)}
                          />
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
            <Row>
            </Row>

            <Row>
              <GameSearch/>
              <GameRanges/>
            </Row>
            {
              searchResults.length !== 0 ? (
                  <Table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nazwa gry</th>
                        <th>Liczba graczy</th>
                        <th>Dodaj do ulubinych</th>
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