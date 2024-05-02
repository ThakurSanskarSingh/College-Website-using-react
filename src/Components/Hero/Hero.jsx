import React from 'react'
import './Hero.css'
import dark from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
  <div className="hero container">

    <div className="hero-text">
        <h1>We ensure better education for better world</h1>
        <p>
            Our Ctting edge curriculum is desgined to empower stuents with the knowledge , skills and experience needed to excel in the dynamic field of education

        </p>
        <button className="btn">Explore More <img src={dark} alt="" /></button>
    </div>
  </div>
  )
}

export default Hero