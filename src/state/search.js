const SEARCH = 'game-list/SEARCH'

export const search = (value) => ({
  type: SEARCH,
  value
})

const initialState = {
  searchString: ''
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchString: action.value
      }
    default:
      return state
  }
}