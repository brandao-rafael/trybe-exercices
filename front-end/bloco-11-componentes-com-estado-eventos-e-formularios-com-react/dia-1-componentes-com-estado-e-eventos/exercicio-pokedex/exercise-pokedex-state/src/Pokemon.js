import React from 'react';
import { pokemonType } from './types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    console.log(pokemon, name, type, averageWeight);
    return (
      <div className="pokemon">
        <div>
          <p>
            {name}
          </p>
          <p>
            {type}
          </p>
          <p>
            {' '}
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Pokemon;
