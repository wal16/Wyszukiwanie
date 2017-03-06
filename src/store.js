import {createStore, combineReducers} from 'redux'
import gamesReducer from './state/games'

const reducer = combineReducers({
  games: gamesReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store