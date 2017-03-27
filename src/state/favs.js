import Api from '../api'

export const FAV_GAME = 'favs/FAV_GAME'
export const FETCH_FAVS = 'favs/FETCH_FAVS'

import { LOGOUT } from './session'

export const fetchFavs = (accessToken, userId) => dispatch =>
  fetch(
    Api.url + '/users/' + userId + '/favoriteItems?access_token=' + accessToken
  ).then(
    response => response.json()
  ).then(
    data => dispatch({
      type: FETCH_FAVS,
      favs: data,
    })
  )

export const favGame = (gameId, userId, accessToken) => dispatch =>
  fetch(
    Api.url + '/users/' + userId + '/favoriteItems?access_token=' + accessToken, {
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
    response => response.json()
  ).then(
    data => dispatch({
      type: FAV_GAME,
      gameId,
      favId: data.id
    })
  )

export const unfavGame = (favId, userId, accessToken) => dispatch => fetch(
  Api.url + '/users/' + userId + '/favoriteItems/' + favId + '?access_token=' + accessToken, {
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
          ({gameId, favId}) => gameId !== action.gameId
        ).concat({gameId: action.gameId, favId: action.favId})
      }
    case FETCH_FAVS:
      return {
        ...state,
        favoriteGameIds: action.favs.map(fav => ({
          gameId: fav.itemId,
          favId: fav.id
        }))
      }
    case LOGOUT:
      return {
        ...state,
        favoriteGameIds: initialState.favoriteGameIds
      }
    default:
      return state
  }
}
