import React from 'react'
import { Dropdown } from 'react-bootstrap'

const SearchByProp = ({setPokemonListData}) => {
    const handleType = async(e)=>{
        e.preventDefault()
        const type = e.target.id
        let url = `https://pokeapi.co/api/v2/type/${type}`
        const res = await fetch(url)
        console.log(res)
        let data = await res.json()
        console.log(data)
        setPokemonListData(data.pokemon)
    }
  return (
    <Dropdown className='typeSearch'>
        <Dropdown.Toggle>Search By Type</Dropdown.Toggle>
        <Dropdown.Menu onClick={handleType}>
            <Dropdown.Item id='1'>Normal</Dropdown.Item>
            <Dropdown.Item id='2'>Fighting</Dropdown.Item>
            <Dropdown.Item id='3'>Flying</Dropdown.Item> 
            <Dropdown.Item id='4'>Poison</Dropdown.Item>
            <Dropdown.Item id='5'>Ground</Dropdown.Item>
            <Dropdown.Item id='6'>Rock</Dropdown.Item>
            <Dropdown.Item id='7'>Bug</Dropdown.Item> 
            <Dropdown.Item id='8'>Ghost</Dropdown.Item>
            <Dropdown.Item id='9'>Steel</Dropdown.Item>
            <Dropdown.Item id='10'>Fire</Dropdown.Item>
            <Dropdown.Item id='11'>Water</Dropdown.Item> 
            <Dropdown.Item id='12'>Grass</Dropdown.Item>
            <Dropdown.Item id='13'>Electric</Dropdown.Item>
            <Dropdown.Item id='14'>Psychic</Dropdown.Item>
            <Dropdown.Item id='15'>Ice</Dropdown.Item> 
            <Dropdown.Item id='16'>Dragon</Dropdown.Item>
            <Dropdown.Item id='17'>Dark</Dropdown.Item> 
            <Dropdown.Item id='18'>Fairy</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchByProp