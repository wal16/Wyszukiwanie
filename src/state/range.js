const RANGE = 'game-list/RANGE'
export const SET_MIN_MAX_LABEL = 'game-list/SET_MIN_MAX_LABEL'

export const range = (value) => ({
  type: RANGE,
  value
})

const initialState = {
  minLabel: 2,
  maxLabel: 20,
  changeRange: {min: 2, max: 20}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RANGE:
      return {
        ...state,
        changeRange: action.value
      }
    case SET_MIN_MAX_LABEL:
      return {
        ...state,
        minLabel: action.data.map(),
        maxLabel:  action.data.map()
      }
    default:
      return state
  }
}