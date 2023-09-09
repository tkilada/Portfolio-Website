import React, {useState} from 'react'
import './Carousel.css' 
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"


export const Carousel = ({data, slide, setSlide}) => {

  const nextSlide=()=>{
    setSlide(slide===data.length - 1 ? 0 : slide + 1)
  }
  const previousSlide = () =>{
    setSlide(slide=== 0 ? data.length - 1: slide-1)
  }

  return (
    <div className='Carousel'>
        {data.map((item, index)=>{
           return (
           <div key={index} className={slide === index ? "slide" : "slide slide-hidden"}>
            <div className='slideName'>{item.name}</div>
            <img className='Image' src={item.src} alt={item.alt}/>
           </div>
           )
        })}
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
      <BsArrowRightCircleFill className='arrow arrow-right'onClick={nextSlide}/>
    
      <span className='indicators'>
        {data.map((_,index)=>{
          return <button key = {index} onClick={()=>setSlide(index)} className={slide === index ? 'indicator' : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  )
}

export default Carousel