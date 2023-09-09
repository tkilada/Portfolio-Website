import React, {useState} from 'react'
import Carousel from '../../../../Components/Carousel/Carousel'
import  {slides}  from './GameProjectCarouselData/CouraselData2'
import CarouselBox from '../../../../Components/Carousel/CarouselBox/CarouselBox'

function Project2Page() {
  const [slide, setSlide] = useState(0)

  return (
    <div className='ProjectContainer'>
      <Carousel data={slides.slideData} slide = {slide} setSlide={setSlide}/>
      <CarouselBox data = {slides} slide = {slide}></CarouselBox>
    </div>
  )
}

export default Project2Page