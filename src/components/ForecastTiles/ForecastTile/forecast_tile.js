import React from 'react';
import PropTypes  from 'prop-types';
import styled from 'styled-components';


const Tile = styled.div`
    border: 2px solid black;
    margin: 2vh 2vw;
    max-width: 250px;
`;

const ForecastTile = props => {
    const date = new Date(Number(props.day.dt)*1000).toString();

    return (
        <Tile>
            <div>Temp</div>
            <div>Date: {date}</div>
            <div>Day: {props.day.temp.day}</div>
            <div>Evening: {props.day.temp.eve}</div>
            <div>Max: {props.day.temp.max}</div>
            <div>Min: {props.day.temp.min}</div>
            <div>Morning: {props.day.temp.morn}</div>
            <div>Night: {props.day.temp.night}</div>
        </Tile>
    )
};

ForecastTile.propTypes = {
    dt: PropTypes.number,
    day: PropTypes.shape({
        temp: PropTypes.shape({ 
            day: PropTypes.number,
            eve: PropTypes.number,
            max: PropTypes.number,
            min: PropTypes.number,
            morn: PropTypes.number,
            night: PropTypes.number
        })
    })
}

export default ForecastTile;