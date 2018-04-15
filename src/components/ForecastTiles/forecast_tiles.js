import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ForecastTile from './ForecastTile/forecast_tile';

const ForecastTilesDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
`;

const renderTiles = (data) => {
    return data.map(day => <ForecastTile key={day.dt} day={day}/>);
}

const ForecastTiles = props => {
    if(props.loading) {
        return (
            <div>Loading</div>
        )
    }
    
    return (
        <ForecastTilesDiv>
            {renderTiles(props.data)}
        </ForecastTilesDiv>
    )
};

ForecastTiles.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array
}

export default ForecastTiles;