
import React from 'react'
import './About.css'
import about_img  from  '../../assets/about.png'
import play_icon  from  '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'> 

    <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
    </div>
    <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
             Embark on a Transformative educational journey with our university's comprensive
             education programs.Our cutting-edge curruculm is designed to empower students 
             with knowledge,skills and expriences needed to  exce; in the dynamic field of education.
        </p>

        <p>
             With a focus on innvoation,hands-on learning, and personlaized
              mentorship,our program prepare aspiring educators to make a
               meaningful impact in classroom,schools and comunitioies.
        </p>

        <p>
            Whether you aspire to become a teacher,adminstartor,counselor,or
             educational leader,our diverse range of programs offers the perfect pathway to 
             achieve your goals and unlock your full potenital in shaping the future of education.
        </p>
        
    </div>

    
      
    </div>
  )
}

export default About
