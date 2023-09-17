import React from 'react'
import PokedexMain from './PokedexMain'
import CarouselBox from '../../../../Components/Carousel/CarouselBox/CarouselBox'
import { slides } from '../Project1/PMCarouselData'


const PokedexCarousel = () => {


  return (
    <div className='ProjectContainer Pokedex'>
        <h1>Pokedex</h1>
        <div className='Poke'>
            <PokedexMain></PokedexMain>
        </div>    
        <div className='CarouselBox stick'>
            <p>This project uses the PokeApi to chart a pokemons stats. The Program will search the api for the input pokemon name and list its stats. The program will also search the database by a stat and show a list of pokemon with that same property.</p>
        </div>
    </div>
  )
}

export default PokedexCarousel