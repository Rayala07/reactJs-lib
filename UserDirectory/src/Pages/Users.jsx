import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

  const users = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Admin',
      company: 'ABC Inc.',
      city: 'New York'
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Moderator',
      company: 'XYZ Corp.',
      city: 'Los Angeles'
    },
    {
      id: 3,
      name: 'Bob Smith',
      role: 'User',
      company: '123 Inc.',
      city: 'Chicago'
    },
    {
      id: 4,
      name: 'Alice Johnson',
      role: 'Admin',
      company: '456 Corp.',
      city: 'San Francisco'
    },
    {
      id: 5,
      name: 'Michael Brown',
      role: 'Moderator',
      company: '789 Inc.',
      city: 'Seattle'
    }
  ]

  return (
    <div>
      {users.map((user) => {
        return (
          <div> 
            <h1>{user.name}</h1>
            <h2>{user.company}</h2>
            <Link to={`/users/${user.id}`}> 
              <button>View Details</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Users
