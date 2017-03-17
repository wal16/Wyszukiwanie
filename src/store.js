import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import gamesReducer from './state/games'
import usersReducer from './state/users'
import searchReducer from './state/search'
import favsReducer from './state/favs'
import loginReducer from './state/session'
import sessionReducer from './state/session'


const reducer = combineReducers({
  games: gamesReducer,
  users: usersReducer,
  search: searchReducer,
  favs: favsReducer,
  login: loginReducer,
  session: sessionReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store