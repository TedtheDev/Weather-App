import React from 'react';
import PropTypes  from 'prop-types';
import styled from 'styled-components';

import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Tile = styled.div`
    border: 5px solid #009494;
    border-radius: 10%;
    box-shadow: 1px 1px 5px #454445;
    margin: 2vh 2vw;
    min-width: 250px;
`;

const DateDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Temp = styled.div`
    display: flex;
    justify-content: center;
`;

const ForecastTile = props => {
    let date = new Date(Number(props.day.dt)*1000);
    date = `${date.toLocaleString('en-us', { month: "long" })} ${date.getDate()}`;
    const temperatureData = [
        {
            name: 'Morning', temp: props.day.temp.morn
        },
        {
            name: 'Day', temp: props.day.temp.day
        },
        {
            name: 'Evening', temp: props.day.temp.eve
        }, 
        {
            name: 'Night', temp: props.day.temp.night
        }
    ];

    return (
        <Tile>
            <DateDiv>{date}</DateDiv>
            <Temp>Temp</Temp>
            <div>Day: {Math.round(props.day.temp.day)} &deg;F</div>
            <div>Evening: {Math.round(props.day.temp.eve)} &deg;F</div>
            <div>Max: {Math.round(props.day.temp.max)} &deg;F</div>
            <div>Min: {Math.round(props.day.temp.min)} &deg;F</div>
            <div>Morning: {Math.round(props.day.temp.morn)} &deg;F</div>
            <div>Night: {Math.round(props.day.temp.night)} &deg;F</div>
            <LineChart width={200} height={100} data={temperatureData}>
                <XAxis dataKey='name' />
                <YAxis/>
                <Line type="monotone" dataKey="temp" stroke="#FF5729"/>
            </LineChart>
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