import React,{useState} from 'react'
import { Container } from 'reactstrap'
import {slides} from './PMCarouselData.js'
import Carousel from '../../../../Components/Carousel/Carousel'
import CarouselBox from '../../../../Components/Carousel/CarouselBox/CarouselBox.jsx'


function Project1() {
  const [slide, setSlide] = useState(0)
  return (
    <Container className='ProjectContainer'>
      <Carousel data={slides.slideData} slide={slide} setSlide={setSlide}></Carousel>
      <CarouselBox data={slides} slide={slide}></CarouselBox>
    </Container>
  )
}

export default Project1