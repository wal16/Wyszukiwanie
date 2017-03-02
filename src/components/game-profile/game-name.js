import React from 'react'

import data from '../../data'

const GameName = (props) => {
  return (
      data.games.filter(
        game => game.id === parseInt(props.params.id)
      ).map(
        game => (
          <div key={game.id}>
            <p>{game.gameName}</p>
          </div>
      )
    )
  )
}

export default GameName