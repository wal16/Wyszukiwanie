import React from 'react'
import {Button} from 'react-bootstrap'

import data from '../../data'
import GameName from './game-name'



const GameProfileView = (props) => {
  console.log( data.games )
  return (
    <div>

      <h1>Profil gry</h1>

      <img src={process.env.PUBLIC_URL + '/img/scrabble.jpg'}
           alt="Zdjecie gry"/>

      <h2>
        <GameName/>
      </h2>

      <p> Opis gry Opis gry Opis gry Opis gry Opis gry Opis gry </p>


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