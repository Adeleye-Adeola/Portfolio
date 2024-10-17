import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './AboutPage.css'
import AboutMe from '../../Components/AboutMe/AboutMe'
import Footer from '../../Components/Footer/Footer'
import Contact from '../../Components/Contact/Contact'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default AboutPage
