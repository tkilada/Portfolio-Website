import React, { useState } from 'react'
import PokemonChart from './PokedexFiles/PokemonChart'
import './PokedexStyle.css'
import PokedexSearch from './PokedexFiles/PokedexSearch'
import SearchByProp from './PokedexFiles/SearchByProp'
import PokemonList from './PokedexFiles/PokemonList'

const PokedexMain = () => {
  const [PokemonData, setPokemonData] = useState()
  const [PokemonListData,setPokemonListData] = useState()
  return (
    <div className='PokedexCarousel FullHW'>
        <PokedexSearch setPokemonData={setPokemonData}/>
        <SearchByProp setPokemonListData={setPokemonListData}/>
        {(PokemonData !== undefined) ? <PokemonChart PokeData={PokemonData} setPokemonListData={setPokemonListData}/>:null}
        {(PokemonListData !== undefined) ? <PokemonList setPokemonData = {setPokemonData} PokeListData={PokemonListData}/> :null}
    </div>
  )
}

export default PokedexMain