const RANGE = 'game-list/RANGE'

export const range = (value) => ({
  type: RANGE,
  value
})

const initialState = {
  changeRange: {min: 2, max: 20}
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RANGE:
      return {
        ...state,
        changeRange: action.value
      }
    default:
      return state
  }
}