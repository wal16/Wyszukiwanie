const RANGE = 'game-list/RANGE'

export const range = (value) => ({
  type: RANGE,
  value
})

const initialState = {
  gameRange: 4
}

export default (state= initialState, action = {}) => {
  switch (action.type) {
    case RANGE:
      return {
        ...state,
        gameRange: action.value
      }
    default:
      return state
}}