import React from 'react'
import {Jumbotron, Grid, Button} from 'react-bootstrap'

class MainView extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Masz grę planszową, która&nbsp;się kurzy?</h1>
          <h2>Aplikacja PożyczME umożliwi Ci&nbsp;
            wymianę nieużywanych planszówek z&nbsp;innymi graczami!</h2>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </Grid>

    )
  }
}

export default (MainView)