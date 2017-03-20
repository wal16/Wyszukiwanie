import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import {logOut} from '../state/session'

const LogUserOut = ({logOut}) => (
  <Button
    bsStyle="default"
    onClick={() => logOut()}>
    Wyloguj
  </Button>
)

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(LogUserOut)