import React, { useEffect, useState } from 'react'
import "./Hero.css"

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
    <div className='container' id='hero'>
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
        <div></div> 
        </div>

        <div className='group'>
            <div>
            <img src="/group2.png" alt="" className='img-1'/>
            <img src="/I.png" alt="My Picture" className='img-2'/>
            </div>
            <div className='follow'>
                <img src="/follow.png" alt="" className='follow-img' />
                <div className='social-accounts'>
                    <img src="/facebook.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <img src="/linkedin.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
