import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Table} from 'react-bootstrap'

class UsersListView extends React.Component {
  render () {
    const {
      users
    } = this.props

    return (
      <Grid>
        <h1>Lista uzytkownikow</h1>
        <Table striped>
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Games</th>
            <th>Wishlist</th>
          </tr>
          </thead>
          <tbody>
          {
            users.data ?
              users.data.map(
              user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <Link to={'/user-profile/' + user.id}>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  </Link>
                  <td>
                    {
                      (user.gameList).map(
                        game => (
                          <li>{game.name}</li>
                        )
                      )
                    }
                  </td>
                  <td>
                    {
                      (user.wishList).map(
                        game => (
                          <li>{game.name}</li>
                        )
                      )
                    }
                  </td>
                </tr>
              )
            )
              : <p>Waiting for users data..</p>
          }
          </tbody>
        </Table>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    users: state.users
  }),
  dispatch => ({})
)(UsersListView)