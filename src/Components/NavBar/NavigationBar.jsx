import React from 'react'
import navBarStyle from './navBarStyle.css'
function NavigationBar({navPage}) {
  return (
    <div className='NavBarBox' >
        {/* <Button onClick = {handleNavSection} className='Home'>Home</Button> */}
        <a href = 'https://portfolio-6e7a5.web.app' className={navPage ==='Home' ? "Home NavButton NavSelected" : 'Home NavButton'}
        >Home</a>
        <a href = 'https://portfolio-6e7a5.web.app/about' className={ navPage ==='About' ? 'About NavButton NavSelected':'About NavButton'}>About</a>
        <a href = 'https://portfolio-6e7a5.web.app/portfolio' className={navPage === 'Portfolio' ? 'ProjectsShortcut NavButton NavSelected':'ProjectsShortcut NavButton' }>Portfolio</a>
        <a href = 'https://portfolio-6e7a5.web.app/resume' className={navPage ==='Resume'?'Resume NavButton NavSelected':'Resume NavButton'}>Resume</a>
        <a href = 'https://portfolio-6e7a5.web.app/contact' className={navPage==='Contact'?'Contact NavButton NavSelected':'Contact NavButton'}>Contact</a>
    </div>
  
  )
}

export default NavigationBar