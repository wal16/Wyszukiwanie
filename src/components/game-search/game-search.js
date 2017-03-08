import React from 'react'
import {connect} from 'react-redux'
// import { set } from '../../state/games'

const GameSearch = ({ games, searchString, set }) => (
  <div>
    <label htmlFor="search">Wyszukiwarka gier</label>
    <input
      id="search"
      type="text"
      value={searchString}
      onChange={ (event) => set(event.target.value) }
    />
  </div>
)

export default connect(
  state => ({
    games: state.games.gamesData,
    searchString: state.games.searchString
  })

)(GameSearch)