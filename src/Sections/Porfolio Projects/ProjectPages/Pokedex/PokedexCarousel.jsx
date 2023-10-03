import React, { useEffect } from 'react'
import PokedexMain from './PokedexMain'
import CarouselBox from '../../../../Components/Carousel/CarouselBox/CarouselBox'
import { slides } from '../Project1/PMCarouselData'


const PokedexCarousel = ({setIsProjectOpen,isProjectOpen}) => {
  useEffect(()=>{
    setIsProjectOpen(true)
  },[])
  console.log(isProjectOpen)
  return (
    <div className='ProjectContainer Pokedex'>
        <h1>Pokedex</h1>
        <div className='Poke'>
            <PokedexMain></PokedexMain>
        </div>    
        <div className='CarouselBox stick'>
            <p>This project uses the PokeApi to chart a pokemons stats. The Program will search the api for the input pokemon name and list its stats. The program will also search the database by a stat and show a list of pokemon with that same property, just click the highlighted stat to see a list of pokemon at the bottom.</p>
        </div>
    </div>
  )
}

export default PokedexCarousel