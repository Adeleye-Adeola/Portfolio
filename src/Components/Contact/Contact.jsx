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
      <div className='generalCont' data-aos = "fade-up" 
         data-aos-easing="ease-in-out" 
         data-aos-delay="200"
          data-aos-duration="2000"
          data-aos-once = 'true'>
            <div>
                <div className='contact-img'>
                  <img src="/contact.png" alt="" />
                </div>
                <div className='text-1'>
                  <p>Let's Discuss your <span>Project</span></p>
                </div>
                <div className='text-2'>
                <p>Lets's create something bold and unique—turning fresh ideas into a visual experience</p>
                <p className='inspires'>that inspires and stands out</p>
                </div>
                </div>
              
            <div className='contactInfo'>
              <div className='infoDiv'>
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
              </div>
              {/*  */}
              <div className='form-input'>
                <form action="">
                  <div>
                  <input type="text" placeholder='Full Name'/>
                  <input type="text" placeholder='Your email'/>
                  </div>
                  <div>
                    <input type="text" placeholder='Phone number'/>
                    <input type="text" placeholder='Budget'/>
                  </div>
                  <div className='text-area'>
                    <textarea name="" id="" placeholder='Message'></textarea>
                  </div>
                  <div className='submit-btn'>
                    <button className='contact-btn'>Submit Message</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        </div>
  )
}

export default Contact
