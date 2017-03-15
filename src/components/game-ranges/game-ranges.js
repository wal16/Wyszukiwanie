import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

import { slider } from '../../state/range'

export default connect(
  state => ({
    games: state.games,
    gameRange: state.slider
  }),
  dispatch => ({
    slider: (value) => dispatch(slider(value))
  })
)(
  class GameRanges extends React.Component {
  constructor (props) {
    super (props)

    this.state = {value: { min: 2, max: 10 }}
  }

  render() {
    return (
      <InputRange
        maxValue={20}
        minValue={2}
        value={4}
        onChange={ (event) => slider(event.target.value)}/>
    )
  }
}
)