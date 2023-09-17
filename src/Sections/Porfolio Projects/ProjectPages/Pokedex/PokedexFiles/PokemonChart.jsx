import React from 'react'
import {ListGroup, Table} from 'react-bootstrap'


const PokemonChart = ({PokeData,setPokemonListData}) => {
  
  const handleSearch = async(e)=>{
    e.preventDefault()
    // console.log(e.target.id,'url')
    const res = await fetch(e.target.id)
    let data = await res.json()
    // console.log(data,"file")
    setPokemonListData(data.pokemon)
    console.log(e)
  }

  const handleMoveSearch= async(e)=>{
    e.preventDefault()
    // console.log(e.target.id,'url')
    const res = await fetch(e.target.id)
    let data = await res.json()
    // console.log(data,"move")
    setPokemonListData(data.learned_by_pokemon)
  }

  return (
    <Table className=''>
    <thead className=''>
      <tr>
        <th>Name</th>
        <th>{PokeData.name}</th>
      </tr>
      <tr>
        <th>Ability</th>
        <th>{PokeData.abilities.map((able)=>(
          <ListGroup className='List' key={able.slot} id={able.ability.url}  onClick={handleSearch}>{able.ability.name}</ListGroup>
        ))}</th>
      </tr>
      <tr>
        <th>Forms</th>
        <th>{PokeData.forms.map((form)=>(
          <ListGroup key ={form.url}>{form.name}</ListGroup>
        ))}</th>
      </tr>
      <tr>
        <th>Stats</th>
        <th>{PokeData.stats.map((skill,indicies)=>(
          <ListGroup key={indicies}>
              {skill.stat.name}:{skill.base_stat}
          </ListGroup>
        ))}</th>
      </tr>
      <tr>
        <th>Type</th>
        <th>{PokeData.types.map((Type)=>(
          <ListGroup className='List' id={Type.type.url}  onClick={handleSearch} key ={Type.slot}>{Type.type.name}</ListGroup>
        ))}</th>
      </tr>
      <tr>
        <th>Height</th>
        <th>{PokeData.height}</th>
      </tr>
      <tr>
        <th>Weight</th>
        <th>{PokeData.weight}</th>
      </tr>
      <tr>
      <th >Moves</th>
        <th className='moves'>
          {PokeData.moves.map((Move)=>(
            <ListGroup className='List' id={Move.move.url} onClick={handleMoveSearch} key={Move.move.url}>{Move.move.name}</ListGroup>
          ))}
        </th>
      </tr>
    </thead>
  </Table>
  )
}

export default PokemonChart