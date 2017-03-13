import React from 'react'
import { connect } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'

import {Grid, PageHeader, Panel, Button} from 'react-bootstrap'

import {fetchGames} from '../../state/games'

export default connect(
  state => ({
    games: state.games
  }),
  dispatch => ({
    fetchGamesHelper: () => dispatch(fetchGames())
  })
)(
  class GameProfileView extends React.Component {
    render() {
      const {
        games,
        params
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



      return (
        <Grid>
          <div>
            <PageHeader>Profil gry <br/>
              <small>Zapoznaj się ze szczegółami wybranej pozycji</small>
            </PageHeader>
            {
              <div key={currentGame.id}>
                <img src={currentGame.image}
                     alt="Zdjecie gry"/>

                <h2>{currentGame.name}</h2>

                <Panel header="Ilość graczy">{currentGame.players}</Panel>

                <Panel header="Opis">{currentGame.description}</Panel>
              </div>
            }
            <LinkContainer to={'/game-profile/' + prevGame}>
              <Button>
                Poprzednia
              </Button>
            </LinkContainer>

            <LinkContainer to={'/game-profile/' + nextGame}>
              <Button>
                Następna
              </Button>
            </LinkContainer>
          </div>
        </Grid>
      )
    }
  }
)

