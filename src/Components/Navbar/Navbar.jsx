import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='container' id='navbar'>
        <nav className='nav'>
            <div className='logo'>
                <img src="/logo.png" alt="" />
                <span>CrownDev</span>
            </div>
            <div className='nav-ul'>
                <ul>
                <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li>Projects</li>     
                    <li><HashLink smooth to = "/#rate-sec"> Testimonial</HashLink>  </li>
                </ul>
            </div>
            <div className='nav-btn'>
                <button>Download CV</button>
            </div>
        </nav>
        <div className='design'>
            <img src="/Design-a.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar
