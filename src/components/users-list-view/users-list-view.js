import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Grid, Table, Panel, Image} from 'react-bootstrap'

import './users-list-view.css'

export default connect(
  state => ({
    users: state.users,
    games: state.games
  }),
  dispatch => ({})
)(
  class UsersListView extends React.Component {
    render() {
      const {
        users,
        games,
      } = this.props

      return (
        <Grid>
          <Panel header="Użytkownicy"
                 className="panel-body__list">
            <div className="panel-body-table__list">
              <Table className="table__users-list table-hover">
                <thead className="table-head__users-list">
                <tr className="table-tr__users-list">
                  <th className="table__users-list-empty"/>
                  <th className="table-th__users-list">Imię i nazwisko</th>
                  <th className="table-th__users-list table__users-list-empty">Posiadane gry</th>
                  <th className="table-th__users-list table__users-list-empty">Lista życzeń</th>
                </tr>
                </thead>
                <tbody className="table-body__users-list">
                {
                  users.data ?
                    users.data.map(
                      user => (
                        <tr className="table-tr__users-list"
                            key={user.id}>
                          <td className="table-td__users-list table__users-list-empty">
                            <div className="image__wrapper">
                              <Image className="user-image__users-list"
                                     src={user.picture}
                                     alt="Zdjecie gry"
                              />
                            </div>
                          </td>
                          <td className="table-td__users-list">
                            <Link to={'/user-profile/' + user.id}>
                              {user.name} {user.surname}
                            </Link>
                          </td>
                          <td className="table-td__users-list table__users-list-empty">
                            {
                              user.id ? (
                                  user.gameList.map(
                                    gameId => games.data.find(game => game.id === gameId)
                                  ).map(
                                    game => (
                                      <div key={game.id}>
                                        <Link to={'game-profile/' + game.id}>
                                          {game.name}
                                        </Link>
                                      </div>
                                    )
                                  )
                                ) : null
                            }
                          </td>
                          <td className="table-td__users-list table__users-list-empty">
                            {
                              user.id ? (
                                  user.wishList.map(
                                    game => games.data.find(g => g.id === game)
                                  ).map(
                                    game => (
                                      <div key={game.id}>
                                        <Link to={'game-profile/' + game.id}>
                                          {game.name}
                                        </Link>
                                      </div>
                                    )
                                  )
                                ) : null
                            }
                          </td>
                        </tr>
                      )
                    )
                    : <tr>
                        <td>
                          Oczekiwanie na dane użytkowników...
                        </td>
                    </tr>
                }
                </tbody>
              </Table>
            </div>
          </Panel>
        </Grid>
      )
    }
  }
)