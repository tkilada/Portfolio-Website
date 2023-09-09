import React, { useState } from 'react'
import Carousel from '../../../../Components/Carousel/Carousel'
import { slides } from './CECarouselData'
import CarouselBox from '../../../../Components/Carousel/CarouselBox/CarouselBox'

function Project3Page() {
  const [slide, setSlide] = useState(0)

  return (
    <div className='ProjectContainer'>
      <Carousel data = {slides.slides} slide = {slide} setSlide={setSlide}></Carousel>
      <CarouselBox data={slides.slides} slide={slide}></CarouselBox>
    </div>
  )
}

export default Project3Page