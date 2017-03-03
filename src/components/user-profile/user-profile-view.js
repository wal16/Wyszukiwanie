import React from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import {Tabs, Tab} from 'react-bootstrap-tabs';

import data from '../../data'

const UserProfileView = (props) =>
  (
    <Grid>
      <h1>Profil Użytkownika</h1>
      <Row>
        <Col xs={12} sm={4} md={4}>
          <Thumbnail className="user--avatar" src={process.env.PUBLIC_URL + '/img/board-games-with-roles.svg'} alt="Avatar użytkownika">
          </Thumbnail>
        </Col>

        <Col xs={12} sm={8} md={8}>
            {
              data.users.filter(
                user => user.id === parseInt(props.params.id)
              ).map(
                user => (
                    <h3 key={user.id}>{user.name} {user.surname}</h3>
                )
              )
            }

            <p>Sekcja o mnie</p>
        </Col>
      </Row>
      <Row>
      <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
        <Tab label="Posiadam">
          <Col md={6} bsStyle="tabs">
          <h3>Posiadam</h3>
          <ul>
            {
              data.users.find(
                user => user.id === parseInt(props.params.id)
              ).gameList.map(
                game => (
                  <li key={game.id}>{game.name}</li>
                )
              )
            }
          </ul>
        </Col>
        </Tab>
        <Tab label="Szukam">
          <Col md={6}>
          <h3>Szukam</h3>
          <ul>
            {
              data.users.find(
                user => user.id === parseInt(props.params.id)
              ).wishList.map(
                game => (
                  <li key={game.id}>{game.name}</li>
                )
              )
            }
          </ul>
        </Col>
        </Tab>
      </Tabs>



      </Row>
    </Grid>
  )

export default UserProfileView