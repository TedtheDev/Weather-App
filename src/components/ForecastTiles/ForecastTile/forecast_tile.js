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
    color: #454445;
`;

const DateDiv = styled.div`
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
`;

const Temp = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: center;
`;

const LowHighDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const TimeTempDiv = styled.div`
    display: grid;
    grid-template: 50% 50% / 50% 50%;
    grid-template-areas:
        "morning day"
        "evening night";
    grid-column-gap: 10%;
`;

const TimeWrapperDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const TimeDiv = styled.div`
    grid-area: ${props => props.area};
`;

const LineBreak = styled.div`
    position: relative;
    &::after {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        top:0;
        left: 0;
        background: black;
    }
`;

const WeatherIcon = styled.div`
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

    const iconpng = `http://openweathermap.org/img/w/${props.day.weather[0].icon}.png`
    return (
        <Tile>
            <DateDiv><strong>{date}</strong></DateDiv>
            <LineBreak></LineBreak>
            <Temp>Temp</Temp>
            <WeatherIcon>{props.day.weather[0].main}<img src={iconpng}/></WeatherIcon>
            <LowHighDiv>
                <div>Low: {Math.round(props.day.temp.min)} &deg;F</div>
                <span>---</span>
                <div>High: {Math.round(props.day.temp.max)} &deg;F</div>
            </LowHighDiv>
            <TimeWrapperDiv>
                <TimeTempDiv>
                    <TimeDiv area="day" >Day: {Math.round(props.day.temp.day)} &deg;F</TimeDiv>
                    <TimeDiv area="evening" >Evening: {Math.round(props.day.temp.eve)} &deg;F</TimeDiv>
                    <TimeDiv area="morning" >Morning: {Math.round(props.day.temp.morn)} &deg;F</TimeDiv>
                    <TimeDiv area="night" >Night: {Math.round(props.day.temp.night)} &deg;F</TimeDiv>
                </TimeTempDiv>
            </TimeWrapperDiv>
            <LineChart width={225} height={100} data={temperatureData}>
                <XAxis dataKey='name' stroke="#454445"/>
                <YAxis stroke="#454445"/>
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