
 import React from 'react'
 import './Hero.css'
import right_arrow from '/src/assets/right_arrow.png'



const Hero = () => {
  return (
    <div className="hero container"> 
    <div className="hero-text">
      <h1>We Ensure better education for a better world</h1>
      <p> Our cutting better  curiculm is designed to empower students with the Knowledge,skills and experinces needed to excel in the dyanmic field of education</p>
      <button className="btn">
        Explore More
        <img src= {right_arrow} alt=""/>
        </button>
    </div>
      
    </div>
  )
}

export default Hero
