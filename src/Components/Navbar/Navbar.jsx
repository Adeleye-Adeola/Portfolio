import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "./Navbar.css"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const body = useRef(null)
    function hamburger() {
        setToggle(!toggle)
    }

    useEffect(() => {
        if(toggle) { 
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        } else {
        document.body.style.overflowX = 'hidden';
            document.documentElement.style.overflowX = 'hidden';
            
        }
    }, [toggle])
    
  return (
    <div className='container' id='navbar'>
        <nav className='nav'>
            <div className='logo'>
                <img src="/logo.png" alt="" />
                <span>CrownDev</span>
            </div>
            <div className={`${toggle ? 'true' : 'false'} nav-ul`} id={`${toggle ? 'true' : 'false'}`}>
                <ul>
                <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li>Projects</li>     
                    <li><HashLink smooth to = "/#rate-sec"> Testimonial</HashLink>  </li>
                </ul>
                <div className='nav-btn'>
                <button>Download CV</button>
            </div>
            </div>
            <div className='bars' onClick={hamburger}>
                <i class="fa-solid fa-bars"></i>    
                </div>
        </nav>
        <div className='design'>
            <img src="/Design-a.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar
