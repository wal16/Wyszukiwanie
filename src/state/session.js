const FETCH__BEGIN = 'session/LOGIN__BEGIN'
const FETCH__SUCCESS = 'session/LOGIN__SUCCESS'
const FETCH__FAIL = 'session/LOGIN__FAILED'

export const LOGOUT = 'session/LOGOUT'

import { fetchUser } from './user'
import { fetchFavs } from './favs'

export const logIn = (username, password) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    'https://tranquil-ocean-17204.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => {
            dispatch({
              type: FETCH__SUCCESS,
              data
            })
            dispatch(fetchUser(data.id, data.userId))
            dispatch(fetchFavs(data.id, data.userId))
          }
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

export const logOut = () => ({
  type: LOGOUT
})

const initialState = {
  data: null,
  fetching: false,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    case LOGOUT:
      return {
        ...state,
        data: initialState.data
      }
    default:
      return state
  }
}