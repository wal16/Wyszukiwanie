import React from 'react'
import {connect} from 'react-redux'
import {logIn} from '../../state/session'
import {
  FormGroup,
  FormControl,
  Button,
  Alert,
  Panel
} from 'react-bootstrap'

export default connect(
  state => ({
    session: state.session
  }),
  dispatch => ({
    logIn: (username, password) => dispatch(logIn(username, password))
  })
)(
  class LoginView extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        username: '',
        password: ''
      }
    }

    render() {
      const {
        session
      } = this.props

      return (
            <form className="login"
                  onSubmit={(event) => {
                    event.preventDefault()
                    this.props.logIn(this.state.username, this.state.password)
                  }}>
              <Panel>
                <FormGroup>
                  <FormControl
                    id="username"
                    type="text" /* TODO: changed type to proper when established what type should be the login value be*/
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
                    required
                    onChange={(event) => {
                      this.setState({password: event.target.value})
                    }}
                  />
                </FormGroup>


                <div className="btn-wrapper">
                  <Button bsStyle="link"
                          className="btn-custom__login"
                          type="submit"
                  >
                    Zaloguj
                  </Button>
                </div>
              </Panel>
              {
                session.error ? (
                    <Alert bsStyle="warning">{session.error}</Alert>
                  ) : null
              }
            </form>
      )
    }
  }
)