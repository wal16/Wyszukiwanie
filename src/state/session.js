const LOGIN__BEGIN = 'session/LOGIN__BEGIN'
const LOGIN__SUCCESS = 'session/LOGIN__SUCCESS'
const LOGIN__FAIL = 'session/LOGIN__FAILED'
//const LOGOUT = 'login/LOGOUT'
//TODO: add logout action

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN__BEGIN })
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
              type: LOGIN__SUCCESS,
              data
            })
            //dispatch(fetchUser(data.id, data.userId))
          }
        ).catch(
          error => dispatch({
            type: LOGIN__FAIL,
            error: 'Zniekształcony JSON w odpowiedzi z serwera'
          })
        )
      }
      throw new Error('Błąd połączenia z serwerem.')
    }
  ).catch(
    error => dispatch({
      type: LOGIN__FAIL,
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
    case LOGIN__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case LOGIN__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case LOGIN__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
  // case LOGIN:
  //   return {
  //     ...state,
  //   }
    default:
      return state
  }
}