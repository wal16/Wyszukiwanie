const FAV_GROUP = 'favs/FAV_GROUP'
const UNFAV_GROUP = 'favs/UNFAV_GROUP'

export const favGroup = groupId => ({
  type: FAV_GROUP,
  groupId
})

export const unfavGroup = groupId => ({
  type: UNFAV_GROUP,
  groupId
})

const initialState = {
  favoriteGroupIds: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FAV_GROUP:
      return {
        ...state,
        favoriteGroupIds: state.favoriteGroupIds.filter(
          groupId => groupId !== action.groupId
        ).concat(action.groupId)
      }
    case UNFAV_GROUP:
      return {
        ...state,
        favoriteGroupIds: state.favoriteGroupIds.filter(
          groupId => groupId !== action.groupId
        )
      }
    default:
      return state
  }
}