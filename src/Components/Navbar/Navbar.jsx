import React from 'react'
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Testimonial</li>
                    <li>Projects</li>     
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
