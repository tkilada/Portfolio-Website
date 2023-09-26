import React, { useEffect } from "react";
import {Container } from "reactstrap";
import ProjectsPage from "./ProjectsPage.css";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import PMIMG from '../../Resources/Images/PeakMindImages/PeakMindLogo.png'
import FarmIMG from '../../Resources/Images/GameProject/FarmGameCoverImage.jpg'
import ChessIMG from  '../../Resources/Images/ChessEngine/ChessBoardBackground.png'
import PokedexIMG from '../../Resources/Images/Pokedex/PokedexImage.PNG'
import { Card } from "react-bootstrap";
function PortfolioProjects({isProjectOpen, setIsProjectOpen,setNavPage}) {
  useEffect(()=>{
    setNavPage('Portfolio')
  },[])
  
  const navigate = useNavigate()
  const handleCloseProject = () => {
    if(isProjectOpen){
      setIsProjectOpen(false)
      navigate('/Portfolio')
    }
  }

  const handleOpenproject=(e)=>{
    e.preventDefault()
    console.log("clikced")
    navigate(`/Portfolio/${e.target.id}`)
  }
  // console.log(isProjectOpen)
  return (
  <div className="Projects BodyBox" >
    <div className="PortfolioTable" onClick={handleCloseProject}>
        <Card className="Card PokedexProject" onClick={handleOpenproject}>
          <Card.Img variant='top' id='Pokedex' src={PokedexIMG} />
          <Card.Body>
            <Card.Title>
              <h3 className="text">
                Pokedex
              </h3>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className="Card PeakMind" onClick={handleOpenproject}>
        <Card.Img variant="top" id="Project1" src ={PMIMG} />
        <Card.Body>
          <Card.Title>
            <h3 className="text">
              Peak Mind
            </h3>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
    <div className="PortfolioTable" onClick={handleCloseProject}>
      <Card className = 'Card FarmGame' onClick={handleOpenproject}>
        <Card.Img variant="top" id = 'Project2' src={FarmIMG}/>
          <Card.Body>
            <Card.Title>
              <h3 className="text">Farm Game</h3>
            </Card.Title>
          </Card.Body>
      </Card>
      <Card className='Card Chess' onClick={handleOpenproject}>
          <Card.Img variant="top" id = 'Project3' src={ChessIMG}/>
          <Card.Body>
            <Card.Title>
              <h3 className="text">
                Chess Engine
              </h3>
            </Card.Title>
          </Card.Body>
      </Card>
      <Card className="Card ChatRoomApp" onClick={handleOpenproject}>
        <Card.Img variant="top" id = 'ChatApp' src={PokedexIMG}></Card.Img>
        <Card.Body>
          <Card.Title>
            <h3 className="text">
              Chat App
            </h3>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
    <Outlet></Outlet>
  </div> 

  );
}

export default PortfolioProjects;



