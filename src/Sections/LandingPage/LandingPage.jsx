import LandingStyle from './LandingStyle.css'
import React, {useState, useCallback, useEffect} from 'react'
import {Container, Button} from 'reactstrap'

import Particles from "react-particles"
import {loadFull} from 'tsparticles'
import { Link, useNavigate } from 'react-router-dom'


function LandingPage({setNavPage}) {
  const navigate = useNavigate()
  const navPortfolio = () => {
    navigate("/Portfolio")
  }
  useEffect(()=>{
    setNavPage('Home')
  },[])
  
// Ts Particles 

  // Green Falling Squares 
  const options = {
    fullScreen:{
      enable:false,
    },
    style:{
      position:'fixed',
      width:'100%',
      height:'100%',
    },
    particles:{
      number:{
        value:45,
        density: {
          enable: true,
          value_area: 800,
        },
      },
   
    color: {
      value: ["#008000"],
    },
   
    shape: {
      type: "square",
    },
    opacity: {
      value: 1
    },
    size: {
      value: { min: 4, max: 8 },
      random:true,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom",
      random: true,
      straight: true,
      outModes: "out",
      warp:true,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    }, modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
          color:'#ffffff'
        }
      },
      push: {
        quantity: 4,
      },
      
    }
  }
}
  
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return ( 
    <div className='BodyBox LandingPageBox'>
      <Particles options={options} init = {particlesInit} className='particles'></Particles>
      <div className='introTextBox'>
         <h1 className='introText'>Hello I'm Thomas Kilada, a Full Stack Web Developer.</h1> 
         <button className='WorkBTN' onClick={navPortfolio}><b>View My Work</b></button>
      </div>
    </div>
    
    
  )
}

export default LandingPage
