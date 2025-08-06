import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/nav-logo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={nav_logo} alt="" className='nav-logo'/>
      <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar
