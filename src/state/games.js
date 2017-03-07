import data from '../data'

const SEARCH = 'game-list/SEARCH'

export const search = (value) => ({
  type: SEARCH,
  value
})

const initialState = {
  gamesData: data.games,
  searchString: '',
  searchResults: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchString: action.value,
        searchResults: initialState.gamesData.filter(
          game => (game.name.toLowerCase()).includes((action.value).toLowerCase())
          )
      }

    default:
      return state
  }
}