import React from 'react'
import {connect} from 'react-redux'
import {NavItem} from 'react-bootstrap'

import {logOut} from '../../state/session'

const LogUserOut = ({logOut}) => (
  <NavItem
    bsStyle="default"
    onClick={() => logOut()}>
    Wyloguj
  </NavItem>
)

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(LogUserOut)