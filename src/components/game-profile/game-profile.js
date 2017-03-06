import React from 'react'

import {Grid, PageHeader, Panel, Button} from 'react-bootstrap'

import data from '../../data'

const GameProfileView = (props) => {

  const currentGame = data.games.find(
    game => game.id === parseInt(props.params.id, 10)
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

export default GameProfileView