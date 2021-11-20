import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokedex = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokemon(response.data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {pokemon.map((pokemon, index)=> (
                <div key={index}>
                    {index} - {pokemon.name}
                </div>)
            )}
        </div>
    );
}
export default Pokedex;

