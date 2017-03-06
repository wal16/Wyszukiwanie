import React from 'react'
import {connect} from 'react-redux'

const GameSearch = (props) => (
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
    searchString: action.value
  })
)(GameSearch)