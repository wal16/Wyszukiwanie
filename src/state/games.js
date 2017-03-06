import data from '../data'

const SET = 'game-list/SET'

export const set = (value) => ({
  type: SET,
  value
})

const initialState = {
  gamesData: data.games,
  searchString: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        searchString: action.value
      }

    default:
      return state
  }
}