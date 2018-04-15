import React from 'react';
import PropTypes  from 'prop-types';

const ForecastTile = props => {
    const date = new Date(props.day.dt*1000).toString();

    return (
        <div style={{border: "1px solid black"}}>
            <div>Temp</div>
            <div>Date: {date}</div>
            <div>Day: {props.day.temp.day}</div>
            <div>Evening: {props.day.temp.eve}</div>
            <div>Max: {props.day.temp.max}</div>
            <div>Min: {props.day.temp.min}</div>
            <div>Morning: {props.day.temp.morn}</div>
            <div>Night: {props.day.temp.night}</div>
        </div>
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