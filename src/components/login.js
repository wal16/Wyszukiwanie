import React from 'react'
import {connect} from 'react-redux'
import {Grid} from 'react-bootstrap'

const LoginView = () => (
  <Grid>
    <h1>Zaloguj się</h1>
  </Grid>
)

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({})
)(LoginView)