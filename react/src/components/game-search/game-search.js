import React from 'react'
import { connect } from 'react-redux'
import { search } from '../../state/search'

const GameSearch = ({ games, searchString, search }) => (
    <input
      id="search"
      className="form-control"
      type="text"
      placeholder="Wpisz tytuł gry..."
      value={searchString}
      onChange={ (event) => search(event.target.value) }
    />
)

export default connect(
  state => ({
    games: state.games,
    searchString: state.search.searchString
  }),
  dispatch => ({
    search: (value) => dispatch(search(value))
  })
)(GameSearch)