import React from 'react'

const Users = ({users, title}) => {
  const userNodes = users ? users.map(
      user => (
        <li key={user.id}>
          {user.id}: {user.name} {user.surname}
        </li>
      )
    ) : []

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {
          users === undefined ?
            'Sorry, we are missing props here' :
            users.length === 0 ?
              'No users for me' : userNodes
        }
      </ul>
    </div>
  )
}

export default Users