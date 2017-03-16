import React from 'react'
import {connect} from 'react-redux'
import {login} from '../state/session'
import {
  Col,
  Row,
  Grid,
  FieldGroup,
  FormGroup,
  Radio,
  FormControl,
  Checkbox,
  ControlLabel,
  Button,
  HelpBlock
} from 'react-bootstrap'
import {Link} from 'react-router'

const LoginView = () => (
  <Grid>
    <h1>Zaloguj się</h1>
    <Row>
      <Col xs={12} sm={6} md={6}>
        <form>
          <FormGroup
            controlId="loginForm"
          >
            <ControlLabel>
              <label htmlFor="login">Nazwa użytkownika / adres e-mail</label>
            </ControlLabel>

            <FormControl
              id="login"
              type="text"
              value=""
              placeholder="Nazwa użytkownika / adres e-mail"
              onChange={() => {
              }}
            />

            <ControlLabel>
              <label htmlFor="password">Hasło</label>
            </ControlLabel>

            <FormControl
              id="password"
              type="text"
              value=""
              placeholder="Hasło"
              onChange={() => {
              }}
            />
            <HelpBlock>Tekst pomocniczy do ew. wykorzystania</HelpBlock>
          </FormGroup>

          <Button type="submit">
            Submit
          </Button>
        </form>
      </Col>
    </Row>
  </Grid>
)

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    login: (value) => dispatch(login(value))
  })
)(LoginView)