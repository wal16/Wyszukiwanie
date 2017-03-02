import React from 'react'
import {Button} from 'react-bootstrap'

import data from '../../data'



const GameProfileView = (props) => {
  console.log( data.games )
  return (
    <div>

      <h1>Profil gry</h1>

      <img src={process.env.PUBLIC_URL + '/img/scrabble.jpg'}
           alt="Zdjecie gry"/>

      <h2>
        {
          data.games.filter(
            game => game.id === parseInt(props.params.id)
          ).map(
            game => (
              <div key={game.id}>
                <p>{game.gameName}</p>
              </div>
            )
          )
        }
      </h2>

      <div>
        {
          data.games.filter(
            game => game.id === parseInt(props.params.id)
          ).map(
            game => (
              <div key={game.id}>
                <p>{game.gameDescription}</p>
              </div>
            )
          )
        }
      </div>

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