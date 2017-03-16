import React from 'react'
import {connect} from 'react-redux'
import {login} from '../state/login'
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

// TODO: zrobić klasę - żeby mieć stan
// TODO: onSubmit na formularzu


export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    login: (value) => dispatch(login(value))
  })
)(
  class LoginView extends React.Component {
    render() {
      const {
        login
      } = this.props

      return (
        <Grid>
          <h1>Zaloguj się</h1>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <form>
                <FormGroup
                  controlId="loginForm"
                >
                  <ControlLabel>
                    <label htmlFor="username">Nazwa użytkownika</label>
                  </ControlLabel>

                  <FormControl
                    id="username"
                    type="email"
                    defaultValue=""
                    placeholder="Adres e-mail"
                    onChange={(event) => {
                      login(event.target.value)
                    }}
                  />

                  <ControlLabel>
                    <label htmlFor="password">Hasło</label>
                  </ControlLabel>

                  <FormControl
                    id="password"
                    type="text" /*TODO: change to password after deploying working login mechanism*/
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
                  bsStyle="primary"
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
    }
  }
)