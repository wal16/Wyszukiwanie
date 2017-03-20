import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, PageHeader, Table, Alert, Panel, Row, Col} from 'react-bootstrap'
import GameSearch from '../game-search/game-search'
import GameRanges from '../game-ranges/game-ranges'
import './games-list-view.css'

import {fetchGames} from '../../state/games'
import {favGame, unfavGame} from '../../state/favs'

export default connect(
  state => ({
    users: state.users,
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
        users,
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
                  <img className="thumb" src={game.image}
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
                    favoriteGameIds.includes(game.id) ?
                      (
                        <img
                          className="fav"
                          src={process.env.PUBLIC_URL + '/img/favorite-remove.png'}
                          onClick={() => unfavGame(game.id)}
                        />
                      ) :
                      (
                        <img
                          className="fav"
                          src={process.env.PUBLIC_URL + '/img/favorite-add.png'}
                          onClick={() => favGame(game.id)}
                        />
                      )
                  }
                </td>

                {
                  users.data ?
                    users.data.map(
                      user => (
                        <tr key={user.id}>
                          <td>
                            <img src={user.picture}
                                 alt="Zdjecie gry"
                                 height="70"
                            />
                          </td>
                          <td>
                            {
                              user.id ? (
                                user.gameList.map(
                                  gameId => games.data.find(game => game.id === gameId)
                                ).filter(
                                  game => ({game.name})
                                )
                              ) : null
                            }
                          </td>

                        </tr>
                      )
                    ) : null
                }
{/*                {
                  props.groups.data ?
                    props.groups.data.filter(
                      group => group.studentIds.includes(student.id)
                    ).map(
                      group => <li key={group.id}>{group.name}</li>
                    ) : null
                }*/}


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
                  <th></th>
                  <th></th>
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