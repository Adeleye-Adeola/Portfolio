import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='container' id='footer'>
        <div className='generalCont'>
            <div className='div-1'> 
                <div>
                    <img src="/Line-2.png" alt="" />
                    <span className='designed'><a href="">Designed by</a></span>
                </div>
            </div>
            <div className='div-2'>
                <div className='all'>
                    <span>@2024. All Right Reserved</span>
                    <span>Built by CrownDev</span>
                </div>
                {/* <div className='credit'>
                    <p>Built by CrownDev</p>
                </div> */}
                <div className='footerImg'>
                    <a href="#"><img src="/f-facebook.png" alt="" /></a>
                    <a href="#"><img src="/f-twitter.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/adeleye-erioluwa-218254323/" target='_blank'><img src="/f-linkedin.png" alt="" /></a>
                    <a href="#"><img src="/f-instagram.png" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
