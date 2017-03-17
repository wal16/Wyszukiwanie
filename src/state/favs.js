const FAV_GAME = 'favs/FAV_GAME'
const UNFAV_GAME = 'favs/UNFAV_GAME'

export const favGame = gameId => ({
  type: FAV_GAME,
  gameId
})

export const unfavGame = gameId => ({
  type: UNFAV_GAME,
  gameId
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
          gameId => gameId !== action.gameId
        ).concat(action.gameId)
      }
    case UNFAV_GAME:
      return {
        ...state,
        favoriteGameIds: state.favoriteGameIds.filter(
          gameId => gameId !== action.gameId
        )
      }
    default:
      return state
  }
}