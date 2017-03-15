import React from 'react'
import {connect} from 'react-redux'
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
            <ControlLabel>Nazwa użytkownika / adres e-mail</ControlLabel>
            <FormControl
              type="text"
              value=""
              placeholder="Enter text"
              onChange={() => {
              }}
            />
            <ControlLabel>Hasło</ControlLabel>
            <FormControl
              type="text"
              value=""
              placeholder="Enter text"
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
  dispatch => ({})
)(LoginView)