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
                    <img src="/f-facebook.png" alt="" />
                    <img src="/f-twitter.png" alt="" />
                    <img src="/f-linkedin.png" alt="" />
                    <img src="/f-instagram.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
