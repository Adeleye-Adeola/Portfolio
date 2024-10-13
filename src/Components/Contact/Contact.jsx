import React from 'react'
import "./Contact.css"

const Contact = () => {
  const infoDetails = [
    {
      id:1, 
      img: "/phone.png",
      text: "Call me",
      phoneNo: "+234 916 773 7655"
    },
    {
      id:2, 
      img: "/email.png",
      text: "Email me",
      phoneNo: "crowncode500@gmail.com"
    },
    {
      id:3, 
      img: "/location.png",
      text: "Address",
      phoneNo: "Lagos NG"
    }
  ]
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
                <span>Lets's create something bold and unique—turning fresh ideas into a visual experience</span>
                <span className='inspires'>that inspires and stands out</span>
                </div>
            </div>
            <div className='contactInfo'>
              {infoDetails.map((info) => (
                <div className='info' key={infoDetails.id}>  
                <div className='infoDetails'>
                  <div>
                    <img src={info.img} alt="" />
                  </div>
                  <div className = "cont-div">
                    <p>{info.text}</p>
                    <p>{info.phoneNo}</p>
                  </div>
                </div>
              </div>
              ))}
              {/*  */}
              <div className='form-input'></div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
