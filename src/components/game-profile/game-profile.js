import React from 'react'
import { connect } from 'react-redux'

import {Grid, PageHeader, Panel, Button} from 'react-bootstrap'

const GameProfileView = ({ games, params }) => {

  const currentGame = games.find(
    game => game.id === parseInt(params.id, 10)
  )

  return (
    <Grid>
    <div>
      <PageHeader>Profil gry <small>Zapoznaj się ze szczegółami wybranej pozycji</small></PageHeader>
      {
            <div key={currentGame.id}>
              <img src={currentGame.image}
                   alt="Zdjecie gry"/>

              <h2>{currentGame.name}</h2>

              <Panel header="Ilość graczy">{currentGame.players}</Panel>

              <Panel header="Opis">{currentGame.description}</Panel>
            </div>
      }

      <Button>
        Poprzednia
      </Button>

      <Button>
        Następna
      </Button>
    </div>
    </Grid>
  )
}

export default connect(
  state => ({
    games: state.games.gamesData
  })
)(GameProfileView)