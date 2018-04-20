import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ForecastTile from './ForecastTile/forecast_tile';

const ForecastTilesDiv = styled.div`
    grid-area: temps;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const renderTiles = (data) => {
    return data.map(day => <ForecastTile key={day.dt} day={day}/>);
}

const ForecastTiles = props => {
    if(props.loading) {
        return (
            <LoadingDiv>Loading...</LoadingDiv>
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