import React, { useEffect, useState } from 'react'
import Carousel from '../../../../Components/Carousel/Carousel'
import { slides } from './CECarouselData'
import CarouselBox from '../../../../Components/Carousel/CarouselBox/CarouselBox'

function Project3Page({setIsProjectOpen}) {
  const [slide, setSlide] = useState(0)
  useEffect(()=>{
    setIsProjectOpen(true)
  })
  return (
    <div className='ProjectContainer'>
      <Carousel data = {slides.slideData} slide = {slide} setSlide={setSlide}></Carousel>
      <CarouselBox data={slides} slide={slide}></CarouselBox>
    </div>
  )
}

export default Project3Page