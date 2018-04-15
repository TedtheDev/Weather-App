import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ForecastTile from './ForecastTile/forecast_tile';

const renderTiles = (data) => {
    return data.map(day => <ForecastTile key={day.dt} day={day}/>);
}

const ForecastTiles = props => {
    if(props.loading) {
        return (
            <div>Loading</div>
        )
    }
    
    console.log('tiles', props.data);
    
    return (
        renderTiles(props.data)
    )
};

ForecastTiles.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array
}

export default ForecastTiles;