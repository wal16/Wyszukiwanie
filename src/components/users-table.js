import React from 'react'
import { Table } from 'react-bootstrap'

const UsersTable = ({users, title}) => {

  return (
    <div>
      <h1>{title}</h1>

      <Table striped bordered condensed hover>
        <tbody>
        {
          users.map(
            user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
              </tr>
            )
          )
        }
        </tbody>
      </Table>
    </div>
  )
}

export default UsersTable