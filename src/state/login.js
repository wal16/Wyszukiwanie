const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'
//TODO: add logout action

//TODO: thunk z loginem i hasłem

export const login = (username, password) => ({
  type: LOGIN,
  username, password
})

//TODO: iniitial state for session needs to be changed to null after finishing the login component
const initialState = {
  username: null,
  password: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.value,
        password: action.value
      }
    default:
      return state
  }
}