import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

import { range } from '../../state/range'


export default connect(
  state => ({
    games: state.games,
    changeRange: state.range.changeRange
  }),
  dispatch => ({
    range: (value) => dispatch(range(value))
  })
)(
  class GameRanges extends React.Component {

    render() {
      return (
        <InputRange
          maxValue={20}
          minValue={2}
          value={this.props.changeRange}
          onChange={ value => this.props.range(value)
          } />
      );
    }
  }
)

