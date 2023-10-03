import React from "react";
import { ListGroup, Table } from 'react-bootstrap'

const PokemonList = ({setPokemonData,PokeListData}) => {
  const PokeList = PokeListData;
  // console.log(PokeList);

  const handleApi = async (url) => {
    const res = await fetch(url);
    console.log(res);
    let data = await res.json();
    // console.log(data);
    setPokemonData(data);
  };

  const handlePokeSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    handleApi(e.target.id);
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>{PokeListData.name}Pokemon</th>
        </tr>
        <tr>
          <th className="typeList">
            <ListGroup className="Full">
              {PokeList.map((poke, idx) => (
                <ListGroup.Item
                  className="List PokeList"
                  variant="flush"
                  key={idx}
                  id={poke.pokemon !== undefined ? poke.pokemon.url : poke.url}
                  onClick={handlePokeSearch}
                >
                  {poke.pokemon !== undefined ? poke.pokemon.name : poke.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </th>
        </tr>
      </thead>
    </Table>
  );
};

export default PokemonList;
