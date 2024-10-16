import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Clients from '../../Components/Clients/Clients'
import MySkills from '../../Components/MySkills/MySkills'
import Ratings from '../../Components/Ratings/Ratings'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Clients/>
      <MySkills/>
      <Ratings/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default LandingPage
