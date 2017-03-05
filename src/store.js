import {createStore} from 'redux'
import data from './data'

const initialState = {
  usersData: data.users,
  gamesData: data.games
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store