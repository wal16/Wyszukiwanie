import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import gamesReducer from './state/games'
import usersReducer from './state/users'
import searchReducer from './state/search'
import loginReducer from './state/login'
import sessionReducer from './state/session'

const reducer = combineReducers({
  games: gamesReducer,
  users: usersReducer,
  search: searchReducer,
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