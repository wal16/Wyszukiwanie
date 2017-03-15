const LOGIN = 'session/LOGIN'
//TODO: add logout action

export const login = (value) => ({
  type: LOGIN,
  value
})

const initialState = {
  session: null,
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