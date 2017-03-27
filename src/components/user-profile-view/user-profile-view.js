import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, Panel, Image} from 'react-bootstrap'
import {Tabs, Tab} from 'react-bootstrap-tabs'
import './user-profile-view.css'

import {fetchUsers} from '../../state/users'


export default connect(
  state => ({
    users: state.users,
    games: state.games
  }),
  dispatch => ({
    fetchUsersHelper: () => dispatch(fetchUsers())
  })
)(
  class UserProfileView extends React.Component {
    render() {
      const {
        params,
        users,
        games
      } = this.props

      const currentUser =
        users.data ?
          users.data.find(
            user => user.id === parseInt(params.userId, 10)
          ) : null

      if (currentUser === null) {
        return <p>Waiting for users data...</p>
      }

      return (
        <Grid>
          <Row className="row-header">
            <Col xs={12}>
              <Panel className="panel-header">
                <h3>Profil użytkownika</h3>
              </Panel>
            </Col>
          </Row>

          <Col xs={12} md={4} sm={6}>
            <div className="image__wrapper-bottom"
                 key={currentUser.id}>
              <Image src={process.env.PUBLIC_URL + currentUser.picture}
                     alt={"Avatar użytkownika " + currentUser.name}
                     className="user-avatar__user-profile"
                     responsive
              />
            </div>
          </Col>

          <Col xs={12} sm={6} md={8}>
            <Panel header={currentUser.name + " " + currentUser.surname}
                   key={currentUser.id}>
              {currentUser.about}
            </Panel>
          </Col>

          <Col xs={12} md={12}>
            <Panel>
              <Tabs defaultActiveKey={1} id="tab">
                <Tab eventKey={1}
                     headerClass='pointer'
                     label="Posiadam">
                  {
                    currentUser.id ?
                      <ul>
                        {
                          currentUser.gameList.map(
                            game => games.data.find(g => g.id === game)
                          ).map(
                            game => (
                              <div key={game.id}>
                                <Link to={'game-profile/' + game.id}>
                                  {game.name}
                                </Link>
                              </div>
                            )
                          )
                        }
                      </ul> : null
                  }
                </Tab>

                <Tab eventKey={2}
                     headerClass='pointer'
                     label="Szukam">
                  {
                    currentUser.id ?
                      <ul>
                        {
                          currentUser.wishList.map(
                            game => games.data.find(g => g.id === game)
                          ).map(
                            game => (
                              <div key={game.id}>
                                <Link to={'game-profile/' + game.id}>
                                  {game.name}
                                </Link>
                              </div>
                            )
                          )
                        }
                      </ul> : null
                  }
                </Tab>
              </Tabs>
            </Panel>
          </Col>
        </Grid>
      )
    }
  }
)

