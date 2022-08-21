import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <Link to ="/" className='navBar_link'>
            React Redux Contact App
        </Link>
    </div>
  )
}

export default NavBar