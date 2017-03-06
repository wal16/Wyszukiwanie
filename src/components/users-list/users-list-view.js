import React from 'react'
import {Link} from 'react-router'
import {LinkContainer} from 'react-bootstrap'
import {Grid, Table} from 'react-bootstrap'
import GameSearch from '../game-search/game-search'
import data from '../../data'

const UsersListView = (props) =>
  (
    <Grid>
      <h1>Lista uzytkownikow</h1>
      /*<GameSearch/>*/
      <Table striped>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
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

                <Link to={'/user-profile/' + user.id}>
                  <td>{user.name} {user.surname}</td>
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
        }
        </tbody>
      </Table>
    </Grid>
  )

export default UsersListView