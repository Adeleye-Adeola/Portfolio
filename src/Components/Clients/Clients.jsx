import React from 'react'
import "./Clients.css"

const Clients = () => {
  return (
    <div className='container' id='clients'>
      <div className='generalCont'>

      <div className='div-1'>
     <p className='num'>90+</p>
     <p className='info'>Satisfied Clients</p>
     </div>

      <div className='div-2'>
      <img src="/line.png" alt="" />
     </div>

      <div className='div-3'>
        <p className='num'>100+</p>
        <p className='info'>Projects Completed</p>
      </div>

      <div className='div-4'>
      <img src="/line.png" alt="" />
      </div>

      <div className='div-5'>
        <p className='num'>2+</p>
        <p className='info'>Years of experience</p>
      </div>
      <div className='design-2'>
        <img src="/design2.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Clients
