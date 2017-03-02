import React from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

const UserProfileView = () =>
  (
    <Grid>
      <h1>Profil Użytkownika</h1>
      <Row>
        <Col xs={12} sm={4} md={4}>
          <Thumbnail className="user--avatar" src={process.env.PUBLIC_URL + '/img/board-games-with-roles.svg'} alt="Avatar użytkownika">
          </Thumbnail>
        </Col>

        <Col xs={12} sm={8} md={8}>
          <h3>Imię i nazwisko / nazwa użytkownika</h3>
            <p>Sekcja o mnie</p>
        </Col>
      </Row>
      <Row>
        <p>przyciski</p>
        <Col md={6} bsStyle="tabs">
          <ul>
            <li>Mam1</li>
            <li>Mam2</li>
            <li>Mam3</li>
            <li>Mam4</li>
            <li>Mam5</li>
          </ul>
        </Col>

        <Col md={6}>
          <ul>
            <li>Wypożyczę1</li>
            <li>Wypożyczę1</li>
            <li>Wypożyczę1</li>
            <li>Wypożyczę1</li>
            <li>Wypożyczę1</li>
          </ul>
        </Col>
      </Row>
    </Grid>
  )

export default UserProfileView