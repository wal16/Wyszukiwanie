import React from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

const UserProfileView = () =>
  (
    <Grid>
      <h1>Profil Użytkownika</h1>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Imię i nazwisko / nazwa użytkownika</h3>
            <p>Sekcja o mnie</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>

  )

export default UserProfileView