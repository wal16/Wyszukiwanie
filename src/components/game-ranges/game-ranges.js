import React from 'react'
import {connect} from 'react-redux'
import InputRange from 'react-input-range'



export default connect(
  state => ({
  }),
  dispatch => ({
      })
)(
  class GameRanges extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: {min: 2, max: 20}
      }

    }

    render() {
      return (
        <InputRange
          maxValue={20}
          minValue={2}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
      );
    }
  }
)