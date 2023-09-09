import React, { useEffect } from "react";
import { Container } from "reactstrap";
import AboutPageStyle from "./AboutPageStyle.css";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, ResponsiveContainer, Treemap, Radar} from 'recharts'
import SkillIcon from '../../Resources/Images/SkillIcon.svg'
function About({setNavPage}) {
  const data = [
    {
      subject: "JavaScript",
      A:90,
      fullMark:100,
    },
    {
      subject:"React",
      A:90,
      fullMark:100
    },
    {
      subject:"Html",
      A:80,
      fullMark:100
    },
    {
      subject:"CSS",
      A:60,
      fullMark:100
    },
    
    {
      subject:"MongoDB",
      A:75,
      fullMark:100
    }
    
  ]
  const treeData = [{
    name:"Skils",
    children:[
      { name: 'Skills', size: 130 },
      { name: 'AxisGridLine', size: 652 },
      { name: 'AxisLabel', size: 636 },
      { name: 'CartesianAxes', size: 6703 },
    ],
  }]

  useEffect(()=>{
    setNavPage('About')
  },[])

  return (
    <div className="AboutPage BodyBox">
        <div className="LeftBox">
          <img
            className="AboutImage"
            src="https://picsum.photos/200/300"
            alt="AboutME IMG"
          />
          <p className="Intro">
            I'm a full stack developer based out of whestchester, NY. I am
            passionate about creating excellent software for all types of
            applications.
          </p>
        </div>
        <div className="AboutSkillsBox FullHW">
          <div className="AboutIconsBox">
            <div className="IconsBox">
              <img
                className="AboutIcon"
                src={SkillIcon}
                alt="About Me Icon 1"
              />
              <h4>Focus on Intuitive UI design</h4>
            </div>
            <div className="IconsBox">
              <img
                className="AboutIcon"
                src={SkillIcon}
                alt=" About Me Icon 2"
              />
              <h4>Fast and Efficient Software</h4>
            </div>
            <div className="IconsBox">
              <img
                className="AboutIcon"
                src={SkillIcon}
                alt="About Me Icon 1"
              />
              <h4>Capable in Both Front and Backend Development</h4>
            </div>
            <div className="IconsBox">
              <img
                className="AboutIcon"
                src={SkillIcon}
                alt="About Me Icon 1"
              />
              <h4>Committed to thorough research and analysis</h4>
            </div>
          </div>
          <div className="AboutBottomBox">
            <ResponsiveContainer width='100%' height='100%' >
              <RadarChart cx="50%" cy = "55%" outerRadius="90%" data={data} stroke="#008b8b">
                <PolarGrid stroke="#00008b"/>
                <PolarAngleAxis dataKey={'subject'} stroke = "#ffa500"/>
                <PolarRadiusAxis stroke="#008b8b"/>
                <Radar name="skills" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5}/>
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

    </div>
  );
}

export default About;
