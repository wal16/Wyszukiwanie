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
              defaultValue=""
              placeholder="Nazwa użytkownika / adres e-mail"
              onChange={(event) => {
                login(event.target.value)
              }}
            />

            <ControlLabel>
              <label htmlFor="password">Hasło</label>
            </ControlLabel>

            <FormControl
              id="password"
              type="text"
              defaultValue=""
              placeholder="Hasło"
              onChange={(event) => {
                login(event.target.value)
              }}
            />
            <HelpBlock>Tekst pomocniczy do ew. wykorzystania</HelpBlock>
          </FormGroup>

          <Button
            type="submit"
            onClick={(event) => {
              event.preventDefault()

            }}
          >
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