import React from 'react'
import Users from './users'
import UsersTable from './users-table'

const users = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe'
  },
  {
    id: 2,
    name: 'Bill',
    surname: 'Gates'
  }
]

const UsersView = () => (
  <div>
    <Users users={users} title="All users" />
    <Users users={users.slice(1)} title="Fav users" />
    <UsersTable users={users} title="Dull users" />
  </div>
)

export default UsersView