import React from 'react'
import {Grid, Table} from 'react-bootstrap'
import data from '../../data'

const UsersListView = (props) =>
  (
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
          data.users.map(
            user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
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
        }
        </tbody>
      </Table>
    </Grid>
  )

export default UsersListView