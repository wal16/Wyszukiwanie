import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

import { range } from '../../state/range'

export default connect(
  state => ({
    games: state.games,
    changeRange: state.range.changeRange,
    minLabel: state.range.minLabel,
    maxLabel: state.range.maxLabel
  }),
  dispatch => ({
    range: (value) => dispatch(range(value))
  })
)(
  class GameRanges extends React.Component {
    render() {
      const {
        changeRange,
        minLabel,
        maxLabel,
        range
      } = this.props

      return (
        <InputRange
          maxValue={maxLabel}
          minValue={minLabel}
          value={changeRange}
          onChange={ value => range(value) }
        />
      );
    }
  }
)

