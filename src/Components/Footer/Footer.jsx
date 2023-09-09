import React from 'react'
import './FooterStyle.css'
function Footer() {
  return (
    <div className='Foot'>
      <div className='SecondTeaserRow'>
        <a className="LinkBox ExperienceSquare" href="http://localhost:3000/Resume">
          <h3 className='Label'><i>Experience/Resume</i></h3>
        </a>
        <a href="https://github.com/tkilada/Portfolio-Website" className='LinkBox'><i>Website Source Code</i></a>
        <a href='http://localhost:3000/Contact' className='LinkBox'>
        <h3 className='Label'><i>Contact Me</i></h3>
        </a>
      </div>
    </div>
  )
}

export default Footer