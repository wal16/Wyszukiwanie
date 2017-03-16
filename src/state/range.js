const RANGE = 'game-list/RANGE'

export const range = (value) => ({
  type: RANGE,
  value
})

const initialState = {

}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RANGE:
      return {
        ...state,
      }
    default:
      return state
  }
}