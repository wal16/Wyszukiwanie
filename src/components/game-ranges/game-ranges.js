import React from 'react'
import InputRange from 'react-input-range'

class GameRanges extends React.Component {
  constructor (props) {
    super (props)

    this.state = {value: 10}
  }

  render() {
    return (
      <InputRange
        maxValue={20}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    )
  }
}

export default (GameRanges)