import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'> 
    <div className="about-left">
<img src={about_img} className='about-img' alt="" />
<img src={play_icon} className='play-icon' alt="" />
    </div>
    <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit tenetur aspernatur dolores vitae! Earum architecto, sequi dolor nostrum quas debitis mollitia laboriosam, ipsum provident, in sunt magnam quae nobis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci ipsum delectus, deserunt repellendus similique ut quam optio exercitationem non atque soluta qui voluptates, quae sed unde, itaque sit cum?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nulla, assumenda praesentium excepturi quas, et ex quo quaerat obcaecati fugiat, quis dolorum saepe. Tempora ad cupiditate amet recusandae libero doloremque.</p>
    </div>
    </div>
  )
}

export default About