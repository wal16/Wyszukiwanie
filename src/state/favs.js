import {FETCH__BEGIN, FETCH__FAIL} from './user'

const FAV_GAME = 'favs/FAV_GAME'
const UNFAV_GAME = 'favs/UNFAV_GAME'
const FETCH_FAVS = 'favs/FETCH_FAVS'

export const fetchFavs = (accessToken, userId) => dispatch =>
  fetch(
    'https://tranquil-ocean-17204.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken
  ).then(
    response => response.json()
  ).then(
    data => dispatch({
      type: FETCH_FAVS,
      favs: data,
    })
  )

export const favGame = (gameId, userId, accessToken) => dispatch => {
  dispatch({type: FETCH__BEGIN})
  return fetch(
    'https://tranquil-ocean-17204.herokuapp.com/api/users/' + userId + '/favoriteItems?access_token=' + accessToken, {
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
          data =>
            dispatch({
              type: FAV_GAME,
              gameId,
              favId: data.id
            })
        ).catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
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
    case FETCH_FAVS:
      return {
        ...state,
        favoriteGroupIds: action.favs.map( fav => fav.itemId )
      }
    default:
      return state
  }
}