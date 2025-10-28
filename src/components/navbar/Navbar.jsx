import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className ='navbar'>
      <ul className="nav-menu">
        <li>Danielle Crevecoeur</li>
        <li>About Me</li>
        <li>Projects</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar