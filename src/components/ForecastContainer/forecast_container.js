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

        this.state = { forecastData: {}, tilesLoading: false, error: '', cityName: '' };

        this.getForecast = this.getForecast.bind(this);
        this.onChangeCityName = this.onChangeCityName.bind(this);
    }

    onChangeCityName (event) {
        this.setState({ cityName: event.target.value });
    }

    async getForecast(event) {
        event.preventDefault();
        this.setState({ tilesLoading: true })
        const API = OpenWeatherAPI;
        const cityName = this.state.cityName !== '' ? this.state.cityName : 'New York';
        const results = await API.fiveDayAverageCityName(cityName);
        if(results.cod !== '200') {
            this.setState({ tilesLoading: false, error: results.message })
        } else {
            this.setState({ forecastData: results, tilesLoading: false, error: '' });
        }
    }

    render() {
        return (
            <ForecastDiv>
                <SearchBarContainer 
                    getForecast={this.getForecast}
                    error={this.state.error}
                    cityName={this.state.cityName}
                    onChangeCityName={this.onChangeCityName}
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