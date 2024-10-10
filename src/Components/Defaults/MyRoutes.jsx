import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from '../../Pages/LandingPage/LandingPage'
const MyRoutes = () => {
  return (
    <Router>
        <Routes>
        <Route path='/' element ={<LandingPage/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes