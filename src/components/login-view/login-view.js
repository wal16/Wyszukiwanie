import React from 'react'
import {connect} from 'react-redux'
import {logIn} from '../../state/session'
import {
  Col,
  FormGroup,
  FormControl,
  Button,
  Alert
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
        <div>
          <Col xs={4}>
            <form className="login" onSubmit={(event) => {
              event.preventDefault()
              this.props.logIn(this.state.username, this.state.password)
            }}>
              {/*<h4 className="h1login">Zaloguj się</h4>*/}
              <FormGroup>
                {/*<ControlLabel>*/}
                {/*<label htmlFor="username">Nazwa użytkownika</label>*/}
                {/*</ControlLabel>*/}

                <FormControl
                  id="username"
                  type="text" /* TODO: changed type to proper when established what type should be the login value be*/
                  value={this.state.username}
                  placeholder="Nazwa użytkownika"
                  onChange={(event) => {
                    this.setState({username: event.target.value})
                  }}
                />

                {/*<ControlLabel>*/}
                {/*<label htmlFor="password">Hasło</label>*/}
                {/*</ControlLabel>*/}

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
              {
                session.error ? (
                    <Alert bsStyle="warning">{session.error}</Alert>
                  ) : null
              }
            </form>
          </Col>
        </div>
      )
    }
  }
)