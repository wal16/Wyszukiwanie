import data from '../data'

const FETCH__BEGIN = 'games/FETCH__BEGIN'
const FETCH__SUCCESS = 'games/FETCH__SUCCESS'
const FETCH__FAIL = 'games/FETCH__FAILED'

const SET = 'game-list/SET'

export const set = (value) => ({
  type: SET,
  value
})

export const fetchGames = () => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    process.env.PUBLIC_URL + '/data/games.json'
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => dispatch({
            type: FETCH__SUCCESS,
            data
          })
        ).catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

const initialState = {
  data: null,
  fetching: false,
  error: null
  gamesData: data.games,
  searchString: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    case SET:
      return {
        ...state,
        searchString: action.value
      }
    default:
      return state
  }
}
