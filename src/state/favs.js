const FAV_GAME = 'favs/FAV_GAME'
const UNFAV_GAME = 'favs/UNFAV_GAME'

export const favGame = gamesId => ({
  type: FAV_GAME,
  gamesId
})

export const unfavGame = gamesId => ({
  type: UNFAV_GAME,
  gamesId
})

const initialState = {
  favoriteGameIds: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FAV_GAME:
      return {
        ...state,
        favoriteGameIds: state.favoriteGameIds.filter(
          gamesId => gamesId !== action.gamesId
        ).concat(action.gamesId)
      }
    case UNFAV_GAME:
      return {
        ...state,
        favoriteGameIds: state.favoriteGameIds.filter(
          gamesId => gamesId !== action.gamesId
        )
      }
    default:
      return state
  }
}