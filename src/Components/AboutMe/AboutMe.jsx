import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className='container' id='about'>
        <div className='div-1'>
            <h1><i>ABOUT ME</i></h1>
        </div>
       <div className='line'>
       <img src="/Line-2.png" alt="" />
       </div>

       <div className='vision'>
        <div className='div'>
            <div className='divs'>
                <img src="/vision.png" alt="" /> 
            </div>
            <div>
             <p className='text'> My vision is to become a leading figure in my field, a true pioneer in web development.
                  I aim to continually learn and grow, while also guiding and inspiring those who follow 
                  in my footsteps, sharing knowledge and paving the way for the next generation of developers.</p>
            </div>
        </div>
        {/*  */}
        <div className='div'>
            <div className='divs'>
                <img src="/mission.png" alt="" />
            </div>
            <div>
                <p className='text'>My mission is to excel in web development by continuously expanding my skills and knowledge. 
                    Using my expertise in web development to educate and inspire others. 
                    Through my YouTube channel, I provide valuable tutorials and insights, 
                    and my WhatsApp community offers a supportive space for developers to connect
                     and grow together, and every various platform I operate to connect to others
                      and inspire them."</p>
            </div>
        </div>

        <div className='design-3'>
        <img src="/Design-a.png" alt="" />
        </div>
       </div>
       <div className='goal-section'>
        
       <div className='goal'>
            <img src="/mygoal.png" alt="" />
        </div>
        <div className='goals'>
            <div className='div'>
                <img src="/tube.png" alt="" />
                <div>
                    <p className='text'>I aim to increase my YouTube channel's subscribers to 1M+
                        subscribers soon and regularly publish two high-quality tutorials per week
                         to enhance learning and engagement."</p>
                </div>
            </div>
            <div className='div'>
                <img src="/wa.png" alt="" />
                <div>
                    <p className='text'>In few years to come, I aim to build a WhatsApp community to include at least 1500+ 
                    active members providing valuable content and facilitating discussions that foster skill
                     development and collaboration."</p>
                     
                </div>
            </div>
        </div>

       </div>

       <div className='youtube'>
        <div className='tube-images'>
            <img src="/youtube.png" alt="" className='img-1'/>
            <img src="/youtube-black.png" alt="" className='img-2'/>
        </div>
        <div>
            <p>
                On my YouTube channel, I provide quality content in web development and related fields,
                 featuring tech talks, tutorials, and insights that inspire and help upcoming developers grow. 
                 Subscribe to stay updated and you won't regret joining this community of learners and innovators...
                 </p>
                 <div className='view-channel'>
                        <button>View Channel</button>
                     </div>
        </div>
       </div>
    </div>
  )
}

export default AboutMe
