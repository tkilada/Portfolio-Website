import React, { useEffect } from "react";
import {Container } from "reactstrap";
import ProjectsPage from "./ProjectsPage.css";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import PMIMG from '../../Resources/Images/PeakMindImages/PeakMindLogo.png'
import ChessIMG from  '../../Resources/Images/ChessEngine/ChessBoardBackground.PNG'
import { Card } from "react-bootstrap";
function PortfolioProjects({isProjectOpen, setIsProjectOpen,setNavPage}) {
  useEffect(()=>{
    setNavPage('Portfolio')
  },[])
  const navigate = useNavigate()
  const OpenProject = () =>{ 
    setIsProjectOpen(true)
  }
  const handleCloseProject = () => {
    if(isProjectOpen){
      setIsProjectOpen(false)
      navigate('/Portfolio')
    }
  }
  // console.log(isProjectOpen)
  return (
  <div className="Projects BodyBox">
    <div className="PortfolioTable" onClick={handleCloseProject}>
      <Link className="Card PeakMind" to="/Portfolio/Project1" onClick={OpenProject}>
        <h3 className="text">Peak Mind Project</h3>
      </Link>
      <Link className = 'Card FarmGame' to="/Portfolio/Project2" onClick={OpenProject}>
        <h3 className="text">Farm Game</h3>
      </Link>
      <Link className='Card ChessBoard' to = '/Portfolio/Project3' onClick={OpenProject}>
        {/* <img src={ChessIMG} alt="Chess Engine Image" className="ImageSize" /> */}
        <h3 className="text">Chess Engine</h3>
      </Link>
    </div>
    <div className="PortfolioTable" onClick={handleCloseProject}>
      <Link className="Card PokedexProject" to = '/Portfolio/Pokedex' onClick={OpenProject}>
        <h3 className="text">
          Pokedex
        </h3>
      </Link>
    </div>
    <Outlet></Outlet>
  </div> 

  );
}

export default PortfolioProjects;



