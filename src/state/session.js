const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'
const GET_SESSION = 'session/GET_SESSION'

//TODO: add logout action

//TODO: thunk z loginem i hasłem
export const login = (username, password) => ({
  type: LOGIN,
  username, password
})


export const getSession = (value) => ({
  type: GET_SESSION,
  value
})

//TODO: iniitial state for session needs to be changed to null after finishing the login component
const initialState = {
  session: 'logged in',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SESSION:
      return {
        ...state,
        session: action.value
      }
    // case LOGIN:
    //   return {
    //     ...state,
    //   }
    default:
      return state
  }
}