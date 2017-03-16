import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

import { range } from '../../state/range'

export default connect(
  state => ({
    games: state.games,
    changeRange: state.range.changeRange,
    minLimit: state.range.minLimit,
    maxLimit: state.range.maxLimit
  }),
  dispatch => ({
    range: (value) => dispatch(range(value))
  })
)(
  class GameRanges extends React.Component {
    render() {
      const {
        changeRange,
        minLimit,
        maxLimit,
        range
      } = this.props

      return (
        <InputRange
          maxValue={maxLimit}
          minValue={minLimit}
          value={changeRange}
          onChange={ value => range(value) } />
      );
    }
  }
)

