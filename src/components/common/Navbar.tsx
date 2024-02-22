import React from 'react'
import Logo from "../../assets/img/logo.svg";



export default function Navbar() {
  return (
    <div className='navbar'>
      <img src ={Logo} className='navLogo' alt="navLogo"></img>
    </div>
  )
}
