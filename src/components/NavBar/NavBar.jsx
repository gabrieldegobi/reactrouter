import React from 'react'
import style from './NavBar.module.css'

import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav >
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? style.active : '')}
      >Home</NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? style.active : '')}
      >About</NavLink>
    </nav>
  )
}

export default NavBar