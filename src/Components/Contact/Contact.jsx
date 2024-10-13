import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='container' id='contact'>
        <div className='generalCont'>
            <div>
                <div className='contact-img'>
                  <img src="/contact.png" alt="" />
                </div>
                <div className='text-1'>
                  <p>Let's Discuss your <span>Project</span></p>
                </div>
                <div className='text-2'>
                <span>Let’s create something bold and unique—turning fresh ideas into a visual experience</span>
                <span className='inspires'>that inspires and stands out</span>
                </div>
            </div>
            <div className='contactInfo'>
              <div className='info'>  
                <div className='info-1'>
                  <div><img src="/phone.png" alt="" /></div>
                  <div>
                    <p>Call me</p>
                    <p>08101416974</p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='form-input'></div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
