import React from 'react'
import './Ratings.css'

const Ratings = () => {
  const rate = [
    {
      id:1,
      wordOne: "CrownDev exceeded my expectations with a beautifully designed, responsive website that perfectly fits my needs.",
      wordTwo: "His attention to detail and professionalism made the entire process seamless. Highly recommend!",
      wordThree: "",
      img: "/p1.png",
      name: "Adefemi oluwatobi",
      country: "Lagos NG",


    },
    {
      id:2,
      wordOne: "Working with CrownDev was a great experience. ",
      wordTwo: "He delivered a modern, functional website that has significantly improved my online presence.",
      wordThree: "Truly impressive work!",
      img: "/p2.png",
      name: "",
      country: "",


    },

    {
      id:3,
      wordOne: "CrownDev brought my vision to life with a clean, user-friendly website. His expertise and quick turnaround time made the process smooth and stress-free.",
      wordTwo: "I couldn’t be happier with the result!",
      wordThree: "",
      img: "/p3.png",
      name: "",
      country: "",


    },
  ]
  return (
    <div className='container' id='ratings'>
      <div className='generalCont' data-aos = "flip-down" 
         data-aos-easing="ease-in-out" 
         data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once = 'true'>
        <div className='review-img'>
            <img src="/review-img.png" alt="" />
            <div className='text'>
              <p>What Customers Say</p>
              <p className='child-2'>Something <span>About Me</span></p>
            </div>
        </div>
       
                 <div className='testimonials' >
                 {rate.map((text) => (
                 <div className='testi-cont' key={rate.id}>
                   <div className='shape'>
                     <img src="Shape.png" alt="" />
                   </div>
                   <div className='word'>
                     <span></span>
                     <span>{text.wordOne}</span>
                     <span>{text.wordTwo}</span>
                     <span>{text.wordThree}</span>
                     </div>
                   <div  className='person-review'>
                     <div>
                       <img src={text.img} alt="" />
                     </div>
       
                     <div className='name'>
                       <span>{text.name}</span><br />
                       <span className='chi-2'>{text.country}</span>
                     </div>
                   </div>
                 </div>
        ))}
               </div>
      </div>
    </div>
  )
}

export default Ratings
