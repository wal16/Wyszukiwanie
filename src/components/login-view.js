import React from 'react'
import {connect} from 'react-redux'
import {login} from '../state/session'
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
    login: (username, password) => dispatch(login(username, password))
  })
)(
  class LoginView extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        username: '',
        password: ''
      }
    }

    render() {
      return (
        <Grid>
          <h1>Zaloguj się</h1>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.login(this.state.username, this.state.password)
              }}>
                <FormGroup
                  controlId="loginForm"
                >
                  <ControlLabel>
                    <label htmlFor="username">Nazwa użytkownika</label>
                  </ControlLabel>

                  <FormControl
                    id="username"
                    type="text" /* TODO: changed type to proper when established what type should be the login value be*/
                    value={this.state.username}
                    placeholder="Nazwa użytkownika"
                    onChange={(event) => {
                      this.setState({username: event.target.value})
                    }}
                  />

                  <ControlLabel>
                    <label htmlFor="password">Hasło</label>
                  </ControlLabel>

                  <FormControl
                    id="password"
                    type="password"
                    value={this.state.password}
                    placeholder="Hasło"
                    onChange={(event) => {
                      this.setState({password: event.target.value})
                    }}
                  />
                  <HelpBlock>Tekst pomocniczy do ew. wykorzystania</HelpBlock>
                </FormGroup>

                <Button
                  type="submit"
                  bsStyle="primary"
                >
                  Zaloguj
                </Button>
              </form>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)