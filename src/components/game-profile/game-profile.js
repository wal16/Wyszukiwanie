import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import data from '../../data'

const GameProfileView = (props) => {
  console.log(data.games)
  return (
    <div>
      <h1>Profil gry</h1>
      {
        data.games.filter(
          game => game.id === parseInt(props.params.id, 10)
        ).map(
          game => (
            <div key={game.id}>

              <img src={process.env.PUBLIC_URL + '/img/scrabble.jpg'}
                   alt="Zdjecie gry"/>

              <h2>{game.name}</h2>

              <p>{game.description}</p>
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
  )
}

export default GameProfileView