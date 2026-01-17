import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <NavLink 
      to="/"
      style={({isActive}) => ({color: isActive ? "red" : "white",textDecoration: "none"})}>
      Home
      </NavLink>
      <NavLink
      to="/users"
      style={({isActive}) => ({color: isActive ? "red" : "white", textDecoration: "none"})}>
      Users
      </NavLink>
    </div>
  )
}

export default Nav
