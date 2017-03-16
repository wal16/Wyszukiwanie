const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'
//TODO: add logout action

//TODO: thunk z loginem i hasłem

export const login = (value) => ({
  type: LOGIN,
  value
})

//TODO: iniitial state for session needs to be changed to null after finishing the login component
const initialState = {
  session: 'logged in',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        session: action.value
      }
    default:
      return state
  }
}