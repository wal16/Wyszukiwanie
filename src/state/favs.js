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

export const unfavGame = (favId, userId, accessToken) => dispatch => fetch(
  'https://tranquil-ocean-17204.herokuapp.com/api/users/' + userId + '/favoriteItems/' + favId + '?access_token=' + accessToken, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  ).then(
  response => dispatch(fetchFavs(accessToken, userId))
)

const initialState = {
  favoriteGameIds: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FAV_GAME:
      return {
        ...state,
        favoriteGameIds: state.favoriteGameIds.filter(
          ({ gameId, favId }) => gameId !== action.gameId
        ).concat({ gameId: action.gameId, favId: action.favId })
      }
    case FETCH_FAVS:
      return {
        ...state,
        favoriteGamesIds: action.favs.map(fav => ({
          gameId: fav.itemId,
          favId: fav.id
        }))
      }
    default:
      return state
  }
}