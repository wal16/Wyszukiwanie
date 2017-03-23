import Api from '../api'

export const FETCH__BEGIN = 'user/FETCH__BEGIN'
export const FETCH__SUCCESS = 'user/FETCH__SUCCESS'
export const FETCH__FAIL = 'user/FETCH__FAILED'

import { LOGOUT } from './session'

export const fetchUser = (accessToken, userId, injectedFetch = fetch) => (dispatch) => {
  dispatch({ type: FETCH__BEGIN })
  return injectedFetch(
    Api.url + '/users/' + userId + '?access_token=' + accessToken
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => dispatch({
            type: FETCH__SUCCESS,
            data
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