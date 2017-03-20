import { FETCH__BEGIN, FETCH__FAIL } from './user'

const FAV_GAME = 'favs/FAV_GAME'
const UNFAV_GAME = 'favs/UNFAV_GAME'

export const favGame = (gameId, accessToken, userId) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    'https://tranquil-ocean-17204.herokuapp.com/api/users/' + userId + '?access_token=' + accessToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemId: gameId,
        itemType: 'game'
      })
    }
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => {
            dispatch({
              type: FAV_GAME,
              gameId
            })
          }
        ).catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Zniekształcony JSON w odpowiedzi z serwera'
          })
        )
      }
      throw new Error('Błąd połączenia z serwerem.')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

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