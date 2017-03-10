import React from 'react'
import {Jumbotron, Grid, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class MainView extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Masz grę planszową, która&nbsp;się kurzy?</h1>
          <h2>Aplikacja PożyczME umożliwi Ci wymianę nieużywanych planszówek z&nbsp;innymi graczami!</h2>
          <p>
            <LinkContainer to="/games-list">
              <Button bsStyle="primary">Przejdź do wyszukiwarki</Button>
            </LinkContainer>
          </p>
        </Jumbotron>
      </Grid>

    )
  }
}

export default (MainView)