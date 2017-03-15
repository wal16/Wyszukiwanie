import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'

import { sliderMin } from '../../state/range'
import { sliderMax } from '../../state/range'


export default connect(
  state => ({
    games: state.games,
    minValue: state.sliderMin.minValue,
    maxValue: state.sliderMax.maxValue
  }),
  dispatch => ({
    sliderMin: (value) => dispatch(sliderMin(value)),
    sliderMax: (value) => dispatch(sliderMax(value))
  })
)(
  class GameRanges extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        minValue,
        maxValue
      }

    }

    render() {
      return (
        <InputRange
          maxValue={maxValue}
          minValue={minValue}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
      );
    }
  }
)