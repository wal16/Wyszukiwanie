import data from '../data'

const initialState = {
  gamesData: data.games
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state
  }
}