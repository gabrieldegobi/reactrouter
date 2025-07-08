import React from 'react'
import style from './NavBar.module.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default NavBar