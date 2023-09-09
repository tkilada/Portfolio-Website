import React, { useEffect } from "react";
import { Container } from "reactstrap";
import ExperienceStyle from "./ExperienceStyle.css";
import Resume from "../../Resources/PDF/Resume.pdf";

function Experience({setNavPage}) {
  useEffect(()=>{
    setNavPage('Resume')
  },[])
  return (
    <div className="BodyBox ExperiencePageMain">
      <a className='ResumePDF' href={Resume} target="_blank">PDF Resume</a>
      <div className="BadgesBox">
        <a className="ExpHeader" href='https://www.credly.com/users/thomas-kilada' target='_blank'><u><h2>Credly Certifications</h2></u></a>
        <div className="badges">
          <a className='ReactFrontEnd BadgeImage' href='https://www.credly.com/badges/4abc5a04-8a19-4b20-965c-51c85bf6fcfa/public_url' target='_blank'></a>
          <a className='JSDev BadgeImage' href='https://www.credly.com/badges/46c67cd7-5f6f-4fc9-80b1-df356fb8a77a/public_url' target='_blank'></a> 
          <a className='MongoDB BadgeImage' href='https://www.credly.com/badges/e968705c-cae0-4a92-ba79-26874085d475/public_url' target='_blank'></a>
          <a className='FULLJS BadgeImage' href='https://www.credly.com/badges/5d291b08-f3db-4812-afb0-de716c6d545b/public_url' target='_blank' ></a> 
        </div>
      </div>
    </div>
  );
}

export default Experience;
