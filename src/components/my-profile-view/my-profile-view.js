import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Grid, Row, Col, Panel, PageHeader, Image} from 'react-bootstrap'
import {Tabs, Tab} from 'react-bootstrap-tabs'

export default connect(
  state => ({
    users: state.users,
    games: state.games,
    user: state.user
  })
)(
  class MyProfileView extends React.Component {
    render() {
      const {
        users,
        games,
        user
      } = this.props

      const currentUser =
        users.data ? users.data[4] : null

      if (currentUser === null) {
        return <p>Waiting for users data...</p>
      }

      return (
        <Grid>
          <PageHeader>Profil użytkownika<br/>
          </PageHeader>
          <Row>
            <Col xs={12} md={4} sm={6}>
              <div key={currentUser.id}>
                <Image
                  src={process.env.PUBLIC_URL + currentUser.picture}
                  alt={"Awatar użytkownika " + currentUser.name}
                  responsive
                />
              </div>
            </Col>

            <Col xs={12} sm={6} md={8}>
              <div key={currentUser.id}>
                <h3>{currentUser.name} {currentUser.surname}</h3>
                <p>{currentUser.about}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Panel>
                <Tabs id="noanim-tab-example">
                  <Tab headerClass='pointer' label="Posiadam">
                    <h3>Posiadam</h3>
                    <ul>
                      {
                        currentUser.id ?
                          <ul>
                            {
                              currentUser.gameList.map(
                                game => games.data.find(g => g.id === game)
                              ).map(
                                game => (
                                  <li key={game.id}>
                                    <Link to={'game-profile/' + game.id}>
                                      {game.name}
                                    </Link>
                                  </li>
                                )
                              )
                            }
                          </ul> : null
                      }

                    </ul>
                  </Tab>
                  <Tab headerClass='pointer' label="Szukam">
                    <h3>Szukam</h3>
                    <ul>
                      {
                        currentUser.id ?
                          <ul>
                            {
                              currentUser.wishList.map(
                                game => games.data.find(g => g.id === game)
                              ).map(
                                game => (
                                  <li key={game.id}>
                                    <Link to={'game-profile/' + game.id}>
                                      {game.name}
                                    </Link>
                                  </li>
                                )
                              )
                            }
                          </ul> : null
                      }

                    </ul>
                  </Tab>
                </Tabs>
              </Panel>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
)