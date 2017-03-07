import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import gamesReducer from './state/games'

const reducer = combineReducers({
  games: gamesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store