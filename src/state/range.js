const CHANGE_MIN = 'game-list/CHANGE_MIN'
const CHANGE_MAX = 'game-list/CHANGE_MAX'

export const sliderMin = (value) => ({
  type: CHANGE_MIN,
  value
})

export const sliderMax = (value) => ({
  type: CHANGE_MAX,
  value
})

const initialState = {
  minValue: 2,
  maxValue: 20
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MIN:
      return {
        ...state,
        minValue: action.value
      }
    case CHANGE_MAX:
      return {
        ...state,
        maxValue: action.value
      }
    default:
      return state
  }
}