import React, { useEffect, useState } from 'react'
import "./Hero.css"
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
    const text = [
        {
            id: 1,
            title: "Professional"

        },

        {
            id: 2,
            title: "Reliable"

        },
        {
            id: 3,
            title: "User friendly"

        },
    ]
    const[current, setCurrent] = useState(0)
    useEffect(() => {
        function count() {
            setCurrent(prev => (prev + 1) % text.length) 
        }
    
        const interval = setInterval(count, 2000)
        return () => clearInterval(interval)
    }, [text.length])
  return (
    <div className='container' id='hero' data-aos = "fade-right" 
    data-aos-easing="ease-in-out" 
    data-aos-delay="200"
     data-aos-duration="2000">
        <div>
        <div className='welcome'>
            <img src="/welcome.png" alt="" />
        </div>
        <div className='hero-text'>
            <p className={`${current == 2 ? 'tex' : ''}`}>I am a <span className='tran'>{text[current].title}</span></p>
            <p className={`${current == 2 ? 'tex' : ''} const`}>Web Developer</p>
            <p className={`${current != 2 ? 'tex' : ''}`}>I create <span className='tran'>{text[2].title}</span></p>
            <p className={`${current !== 2 ? 'tex' : ''} const`}>Web Application</p>
        </div>
        <div className='i'>
            <p>I am a professional web developer who creates exceptional and</p>
            <p>standout websites for my clients</p>
        </div>
        <div className='quick-contact'>
            <div className='imgs-1 img'><a href=""><img src="/call.png" alt="" /></a></div>
            <div className='imgs-2 img'><a href=""><img src="/email.png" alt="" /></a></div>
            <div className='imgs-3 img'><a href=""><img src="/message.png" alt="" /></a></div>
            <div className='quick-contact-btn' data-aos = "fade-up" 
         data-aos-easing="ease-in-out" 
         data-aos-delay="200"
          data-aos-duration="3000">
                <HashLink smooth to = "/#contact-sec"><button className='quick-btn'>Contact Me</button></HashLink>
            </div>
            </div> 
       
        </div>

        <div className='group'>
            <div>
            <img src="/group2.png" alt="" className='img-1'/>
            <img src="/I.png" alt="My Picture" className='img-2'/>
            </div>
            <div className='follow' data-aos = "fade-down" 
         data-aos-easing="ease-in-out" 
         data-aos-delay="200"
          data-aos-duration="2000"
          data-aos-once = 'true'>
                <img src="/follow.png" alt="" className='follow-img' />
                <div className='social-accounts'>
                    <img src="/facebook.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <a href="https://www.linkedin.com/in/adeleye-erioluwa-218254323/" target='_blank'><img src="/linkedin.png" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
