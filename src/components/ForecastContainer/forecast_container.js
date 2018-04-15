import React, { Component } from 'react';
import styled from 'styled-components';
import OpenWeatherAPI from '../../../services/openweathermap';
import SearchBarContainer from '../SearchBarContainer/search_bar_container';
import ForecastTiles from '../ForecastTiles/forecast_tiles';

const ForecastDiv = styled.div`
    grid-area: app;
    display: grid;
    grid-template: 5vh 80vh / auto; 
`;

class Forecast extends Component {
    
    constructor(props) {
        super(props);

        this.state = { forecastData: {}, tilesLoading: false };

        this.getForecast = this.getForecast.bind(this);
    }

    async getForecast(cityId) {
        this.setState({ tilesLoading: true })
        const API = OpenWeatherAPI;
        const results = await API.fiveDayAverageCityId(cityId);
        this.setState({forecastData: results, tilesLoading: false });
    }

    render() {
        return (
            <ForecastDiv>
                <SearchBarContainer 
                    getForecast={this.getForecast} 
                />
                <ForecastTiles 
                    loading={this.state.tilesLoading} 
                    data={this.state.forecastData.list || []}
                />
            </ForecastDiv>
        )
    }
};

export default Forecast;