import React from 'react'
import "./MySkills.css"

const MySkills = () => {
  return (
    <div className='container' id='mySkills'>
        <div className='generalCont' data-aos = "fade-up" 
         data-aos-easing="ease-in-out" 
         data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once = 'true'>
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
                    <p className='text-a'>quality websites using the follwoing technologies</p>
                </div>
                <div data-aos = "fade-up" 
         data-aos-easing="ease-in-out" 
         data-aos-delay="200"
          data-aos-duration="2000"
          data-aos-once = 'true'>
                    <button className='hire-btn'>Hire Me</button>
                </div>
            </div>
            {/* Div 2 */}
            <div className='skills-display' >
                <div className="tech img-1"><img src="/html.png" alt="HTML" />
                <p className='tag-1 tag'>HTML5</p>
                </div>
                <div className="tech img-2"><img src="/js.png" alt="JAVASCRIPT" />
                <p className='tag-2 tag'>JAVASCRIPT</p>
                </div>  
                <div className="tech img-3"><img src="/css.png" alt="CSS3" />
                <p className='tag-3 tag'>CSS3</p>
                </div>
                <div className="tech img-4"><img src="/django.png" alt="DJANGO" />
                <p className='tag-4 tag'>DJANGO</p>
                </div>
                <div className="tech img-5"><img src="/bootstrap.png" alt="BOOTSTRAP" />
                <p className='tag-5 tag'>BOOTSTRAP</p>
                </div>
                <div className="tech img-6"><img src="/react.png" alt="REACT" />
                <p className='tag-6 tag'>REACT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MySkills
