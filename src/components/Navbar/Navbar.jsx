import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"

function Navbar() {
  return (
    <nav>
      <a href="#"><img src={logo} alt="Logo"/></a>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#campus">Campus</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact"><button className='btn'>Contact us</button></a></li>
      </ul>
    </nav>
  )
}

export default Navbar