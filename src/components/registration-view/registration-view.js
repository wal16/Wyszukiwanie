import React from 'react'
import {connect} from 'react-redux'
import {fetchRegistration} from '../../state/registration'

import {
  FormGroup,
  FormControl,
  Button,
  Panel
} from 'react-bootstrap'

export default connect(
  null,
  dispatch => ({
    register: ({username, password, email}) => dispatch(fetchRegistration(username, password, email))
  })
)(
  class RegistrationView extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        username: '',
        password: '',
        email: ''
      }
    }

    render() {
      return (
        <form className="login"
              onSubmit={(event) => {
                event.preventDefault()
                this.props.register(this.state)
              }}>
          <Panel>
            <FormGroup>
              <FormControl
                id="username"
                type="text"
                value={this.state.username}
                placeholder="Nazwa użytkownika"
                onChange={(event) => {
                  this.setState({username: event.target.value})
                }}
              />

              <FormControl
                id="password"
                type="password"
                value={this.state.password}
                placeholder="Hasło"
                onChange={(event) => {
                  this.setState({password: event.target.value})
                }}
              />

              <FormControl
                id="email"
                type="email"
                value={this.state.email}
                placeholder="Podaj adres e-mail"
                onChange={(event) => {
                  this.setState({email: event.target.value})
                }}
              />
            </FormGroup>

            <div className="btn-wrapper">
              <Button bsStyle="link"
                      className="btn-custom__login"
                      type="submit"
                      required
              >
                Zarejestruj się
              </Button>
            </div>
          </Panel>
        </form>
      )
    }
  }
)