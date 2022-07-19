import React, { Component } from "react";
import PropTypes from 'prop-types'


class Pokemon extends Component {
    render() {
            const { name, type, image, averageWeight } = this.props.data;
            const { value, measurementUnit } = averageWeight;
        return (
            <div className="pokemon-item">
                <><h3>{name}</h3><p>{type}</p>
                    <p>{value} {measurementUnit} </p>
                    <img src={image} alt={name} className="pokemon-img"/></>
            </div>
        )
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
}

export default Pokemon;