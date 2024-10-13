import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Clients from '../../Components/Clients/Clients'
import MySkills from '../../Components/MySkills/MySkills'
import Ratings from '../../Components/Ratings/Ratings'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Clients/>
      <MySkills/>
      <Ratings/>
    </div>
  )
}

export default LandingPage
