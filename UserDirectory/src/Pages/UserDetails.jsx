import { useNavigate, useParams } from 'react-router-dom'

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

const UserDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === parseInt(id))

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.role}</h1>
      <h1>{user.company}</h1>
      <h1>{user.city}</h1>

      <button onClick={() => navigate('/') }>Go to Home</button>
      <button onClick={() => navigate('/users')}>Got to Users</button>
    </div>
  )
}

export default UserDetails
