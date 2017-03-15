import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

import { slider } from '../../state/range'

const GameRanges = ({ games, gameRange,slider}) => (
  <InputRange
    maxValue={20}
    minValue={2}
    value={4}
    onChange={ (event) => slider(event.target.value)}/>
)

export default connect(
  state => ({
    games: state.games,
    gameRange: state.slider
  }),
  dispatch => ({
    slider: (value) => dispatch(slider(value))
  })
)(GameRanges)