import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'


import {Grid, PageHeader, Panel, ButtonToolbar, Button, Row, Col, Image} from 'react-bootstrap'

import {fetchGames} from '../../state/games'
import {favGame, unfavGame} from '../../state/favs'
import './game-card-view.css'

export default connect(
  state => ({
    users: state.users,
    games: state.games,
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
  class GameProfileView extends React.Component {
    render() {
      const {
        users,
        games,
        params,
        favGame,
        unfavGame,
        favoriteGameIds,
        userId,
        accessToken
      } = this.props

      if (games.data === null) {
        return <p>Waiting for games...</p>
      }

      const currentGame = games.data.find(
        game => game.id === parseInt(params.gameId, 10))

      const prevGame = (
        (currentGame.id > 1) ? (currentGame.id - 1) : (games.data.length)
      )

      const nextGame = (
        (currentGame.id <= games.data.length - 1) ? (currentGame.id + 1) : (1)
      )

      const fav = favoriteGameIds.find(fav => fav.gameId === currentGame.id)

      const favId = (fav && fav.favId) || undefined

      return (
        <Grid>
          <div>
            <PageHeader>Profil gry <br/>
              <small>Zapoznaj się ze szczegółami wybranej pozycji</small>
            </PageHeader>
            {
                <div key={currentGame.id}>
                  <Col xs={12} sm={6} md={4}>
                    <Image src={currentGame.image}
                           alt="Zdjęcie gry"
                           responsive
                    />
                  </Col>

                  <Col xs={12} sm={6} md={8}>

                      <Col>
                        <h2>{currentGame.name}</h2>
                        <div>
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
                                  onClick={() => favGame(currentGame.id, userId, accessToken)}
                                />
                              )
                          }
                        </div>
                        <ButtonToolbar>
                          <LinkContainer to={'/game-profile/' + prevGame}>
                            <Button>
                              &larr; Poprzednia
                            </Button>
                          </LinkContainer>

                          <LinkContainer to={'/game-profile/' + nextGame}>
                            <Button>
                              Następna &rarr;
                            </Button>
                          </LinkContainer>
                        </ButtonToolbar>
                      </Col>


                    <Panel header="Liczba graczy">{currentGame.playersMin} - {currentGame.playersMax}</Panel>
                    <Panel header="Gracze, którzy posiadaja grę">
                      {
                        users.data ?
                          users.data.filter(
                            user => user.gameList.includes(currentGame.id)
                          ).map(
                            user =>
                              <Link to={'/user-profile/' + user.id}>
                                <img key={user.id} role="persentation" className="avatars" src={user.picture}
                                     alt="Zdjęcie uzytkownikow posiadajacych gre"/>
                              </Link>
                          ) : null
                      }

                    </Panel>
                  </Col>

                  <Col xs={12} sm={12}>
                    <Panel header="Opis">{currentGame.description}</Panel>
                  </Col>
              </div>
            }
          </div>
        </Grid>
      )
    }
  }
)

