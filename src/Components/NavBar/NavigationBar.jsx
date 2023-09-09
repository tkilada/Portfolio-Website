import React from 'react'
import navBarStyle from './navBarStyle.css'
function NavigationBar({navPage}) {
  return (
    <div className='NavBarBox' >
        {/* <Button onClick = {handleNavSection} className='Home'>Home</Button> */}
        <a href = 'http://localhost:3000' className={navPage ==='Home' ? "Home NavButton NavSelected" : 'Home NavButton'}
        >Home</a>
        <a href = 'http://localhost:3000/About' className={ navPage ==='About' ? 'About NavButton NavSelected':'About NavButton'}>About</a>
        <a href = 'http://localhost:3000/Portfolio' className={navPage === 'Portfolio' ? 'ProjectsShortcut NavButton NavSelected':'ProjectsShortcut NavButton' }>Portfolio</a>
        <a href = 'http://localhost:3000/Resume' className={navPage ==='Resume'?'Resume NavButton NavSelected':'Resume NavButton'}>Resume</a>
        <a href = 'http://localhost:3000/Contact' className={navPage==='Contact'?'Contact NavButton NavSelected':'Contact NavButton'}>Contact</a>
    </div>
  
  )
}

export default NavigationBar