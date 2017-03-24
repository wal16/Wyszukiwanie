import Api from '../api'

const FETCH__BEGIN = 'session/LOGIN__BEGIN'
const FETCH__SUCCESS = 'session/LOGIN__SUCCESS'
const FETCH__FAIL = 'session/LOGIN__FAILED'

const CLEAR_ERRORS = 'session/CLEAR_ERRORS'

export const LOGOUT = 'session/LOGOUT'

import { fetchUser } from './user'
import { fetchFavs } from './favs'

export const logIn = (username, password) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    Api.url + '/users/login', {
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
      if (response.status === 401) {
        return response.json().then(
          error => dispatch({
          type: FETCH__FAIL,
          error: 'Nieprawidłowy login lub hasło. Spróbuj ponownie.'
        }))
      }
      throw new Error('Błąd połączenia')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

export const clearLoginErrors = () => ({
  type: CLEAR_ERRORS
})

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
    case CLEAR_ERRORS:
      return {
        ...state,
        error: initialState.data
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