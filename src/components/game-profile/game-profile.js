import React from 'react'
import {connect} from 'react-redux'
import {Grid, PageHeader, Panel, Button} from 'react-bootstrap'

import data from '../../data'

const GameProfileView = (props) => {
  console.log(data.games)
  return (
    <Grid>
    <div>
      <PageHeader>Profil gry <small>Zapoznaj się ze szczegółami wybranej pozycji</small></PageHeader>
      {
        data.games.filter(
          game => game.id === parseInt(props.params.id, 10)
        ).map(
          game => (
            <div key={game.id}>

              <img src={process.env.PUBLIC_URL + '/img/scrabble.jpg'}
                   alt="Zdjecie gry"/>

              <h2>{game.name}</h2>

              <Panel header="Ilość graczy">{game.players}</Panel>

              <Panel header="Opis">{game.description}</Panel>
            </div>
          )
        )
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