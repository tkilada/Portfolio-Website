import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Input } from 'reactstrap'

const PokedexSearch = ({setPokemonData}) => {
    const input = useRef()
    const handleApi = async(e) =>{
        const Pokemon = input.current.value
        e.preventDefault()
        let url = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`
        const res = await fetch(url)
        console.log(res)
        let data = await res.json()
        console.log(data)
        setPokemonData(data)
    }

    const moveInput = useRef()
  return (
    <div className='PokedexSearch'>
        <Input innerRef={input}/>
        <Button onClick={handleApi}>Find Pokemon</Button>
    </div>
  )
}

export default PokedexSearch