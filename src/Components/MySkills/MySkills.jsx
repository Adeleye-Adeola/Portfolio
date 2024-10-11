import React from 'react'
import "./MySkills.css"

const MySkills = () => {
  return (
    <div className='container' id='mySkills'>
        <div className='generalCont'>
            <div className='div-1'>
                <div className='skills-img'>
                    <img src="/myskills.png" alt="" />
                </div>
                <div className='why'>
                    <p>Why Hire Me For Your</p>
                    <p>Next <span>Project?</span></p>
                </div>
                <div className='why-2'>
                    <p>I am a web developer who creates efficient, stunning and high-</p>
                    <p>quality websites using the follwoing technologies</p>
                </div>
                <div>
                    <button>Hire Me</button>
                </div>
            </div>
            {/* Div 2 */}
            <div className='skills-display'>
                <div className="tech img-1"><img src="/html.png" alt="" /></div>
                <div className="tech img-2"><img src="/js.png" alt="" /></div>
                <div className="tech img-3"><img src="/css.png" alt="" /></div>
                <div className="tech img-4"><img src="/django.png" alt="" /></div>
                <div className="tech img-5"><img src="/bootstrap.png" alt="" /></div>
                <div className="tech img-6"><img src="/react.png" alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default MySkills
