import React, { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    render() {
        const pokemonHTMLElement = pokemons.map((pokemon) => {
            return <Pokemon data={ pokemon } key= { pokemon.id } />
        })
        return (
            <div>
                { pokemonHTMLElement }
            </div>
        )
    }
}

export default Pokedex;