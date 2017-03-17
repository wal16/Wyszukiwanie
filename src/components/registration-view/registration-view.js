import React from 'react'
import {connect} from 'react-redux'

import { fetchRegistration } from '../../state/registration'

import {
  Col,
  Row,
  Grid,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  HelpBlock
} from 'react-bootstrap'

export default connect(
  null,
  dispatch => ({
    register: ({username, password, email}) => dispatch(fetchRegistration(username, password, email))
  })
)(
  class RegistrationView extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        username: '',
        password: '',
        email: ''

      }
    }

    render() {
      return (
        <Grid>
          <h1>Rejestracja</h1>
          <Row text-center>
            <Col xs={12} sm={6} md={6}>
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.register(this.state)
              }}>
                <FormGroup>
                  <ControlLabel>
                    <label htmlFor="username">Nazwa użytkownika</label>
                  </ControlLabel>

                  <FormControl
                    id="username"
                    type="text" /* TODO: changed type to proper when established what type should be the login value be*/
                    value=""
                    placeholder="Nazwa użytkownika"
                    onChange={(event) => {
                      this.setState({ username: event.target.value})
                    }}
                  />

                  <ControlLabel>
                    <label htmlFor="password">Hasło</label>
                  </ControlLabel>

                  <FormControl
                    id="password"
                    type="password"
                    value=""
                    placeholder="Hasło"
                    onChange={(event) => {
                      this.setState({ password: event.target.value})
                    }}
                  />

                  <ControlLabel>
                    <label htmlFor="email">Podaj adres e-mail</label>
                  </ControlLabel>

                  <FormControl
                    id="email"
                    type="email"
                    placeholder="Podaj adres e-mail"
                    onChange={(event) => {
                      this.setState({email: event.target.value})
                    }}
                      />




                  <HelpBlock>Tekst pomocniczy do ew. wykorzystania</HelpBlock>
                </FormGroup>

                <Button
                  type="submit"
                  bsStyle="primary"
                >
                  Zarejstruj
                </Button>
              </form>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)