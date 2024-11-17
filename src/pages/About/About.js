import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <div className='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src='kamal.jpeg' alt='profile-pic'></img>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content' id='about'>
                <h1>About me</h1>
                <p>
                I am a dedicated software engineer with a strong background
                in developing innovative solutions. Proficient in multiple
                 programming languages and frameworks, I thrive in collaborative
                  environments and focus on delivering high-quality software.
                  I am eager to contribute my skills to a dynamic team and continue
                  growing in the tech field.


                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
