import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from '../../Pages/LandingPage/LandingPage'
import AboutPage from '../../Pages/AboutPage/AboutPage'
const MyRoutes = () => {
  return (
    <Router>
        <Routes>
        <Route path='/' element ={<LandingPage/>}/>
        <Route path = '/about' element = {<AboutPage />}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes
