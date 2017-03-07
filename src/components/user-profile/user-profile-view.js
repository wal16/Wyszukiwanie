import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import {Tabs, Tab} from 'react-bootstrap-tabs';

import data from '../../data'

const UserProfileView = ({ gameList, games, params: {userId}, users }) => {

  const currentUser = data.users.find(
    user => user.id === parseInt(userId, 10)
  )

  return (
    <Grid>
      <h1>Profil Użytkownika</h1>
      <Row>
        <Col xs={12} sm={4} md={4}>
          <div key={currentUser.id}>
            <img src={process.env.PUBLIC_URL + currentUser.picture}/>
          </div>
        </Col>

        <Col xs={12} sm={8} md={8}>
          <div key={currentUser.id}>
            <h3>{currentUser.name} {currentUser.surname}</h3>
            <p>{currentUser.about}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label="Posiadam">
              <h3>Posiadam</h3>
              <ul>

                {
                  currentUser.gameList ?
                  currentUser.gameList.map(
                    game => (
                      <li key={gameList}>
                        <Link to={'/games/' + gameList}>
                          {
                            games.gamesData.filter(
                              game => game.id === gameList
                            ).map(
                              game => game.name
                            )
                          }
                        </Link>
                      </li>
                    )
                  ) : null
                }
              </ul>
            </Tab>
            <Tab label="Szukam">
              <h3>Szukam</h3>
              <ul>
                {
                  currentUser.wishList.map(
                    game => (
                      <li key={game.id}>{game.name}</li>
                    )
                  )
                }
              </ul>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Grid>
  )
}
export default connect (
  state => ({
    games: state.games
  })
)(UserProfileView)