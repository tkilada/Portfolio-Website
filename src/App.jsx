
import './App.css';
import LandingPage from './Sections/LandingPage/LandingPage';
import PortfolioProjects from './Sections/Porfolio Projects/PortfolioProjects';
import About from './Sections/About Me/About';
import NavigationBar from './Components/NavBar/NavigationBar';
import Experience from './Sections/Experience-Education/Experience';
import Contact from './Sections/Contact/Contact';
import {Route, Routes } from 'react-router-dom';
import Project2Page from './Sections/Porfolio Projects/ProjectPages/Project2/Project2Page';
import Project1Page from './Sections/Porfolio Projects/ProjectPages/Project1/Project1Page';
import Project3Page from './Sections/Porfolio Projects/ProjectPages/Project3/Project3Page';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [isProjectOpen, setIsProjectOpen ] = useState(false)
  const [navPage, setNavPage] = useState('Home')
  useEffect(() => {
    document.title = 'Thomas Kilada';
  }, []);
  return (
   <div className='PageBox'>
    <NavigationBar navPage={navPage}></NavigationBar>
      <Routes>
        <Route path ='/' element = {<LandingPage isProjectOpen={isProjectOpen} setIsProjectOpen={setIsProjectOpen} setNavPage = {setNavPage}/>}></Route>
        <Route path ='/About' element = {<About setNavPage = {setNavPage}/>}></Route>
        <Route path ='/Contact' element = {<Contact setNavPage = {setNavPage}/>}></Route>
        <Route path ='/Resume'element ={<Experience setNavPage = {setNavPage}/>}></Route>
        <Route path ='/Portfolio' element = {<PortfolioProjects setNavPage = {setNavPage} isProjectOpen={isProjectOpen} setIsProjectOpen={setIsProjectOpen}/>}>
          <Route path='Project1' element={<Project1Page isProjectOpen={isProjectOpen} setIsProjectOpen={setIsProjectOpen}/>}/>
          <Route path='Project2' element={<Project2Page isProjectOpen={isProjectOpen} setIsProjectOpen = {setIsProjectOpen}/>}/>
          <Route path='Project3' element={<Project3Page isProjectOpen={isProjectOpen} setIsProjectOpen = {setIsProjectOpen}/>}/>
        </Route>
      </Routes>
    <Footer></Footer>
   </div>
  );
}

export default App;
