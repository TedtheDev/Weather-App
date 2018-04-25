import React, { Component } from 'react';
import styled from 'styled-components';
import OpenWeatherAPI from '../../services/openweathermap';
import SearchBarContainer from '../SearchBarContainer/search_bar_container';
import ForecastTiles from '../ForecastTiles/forecast_tiles';

const ForecastMain = styled.main`
    grid-area: app;
    display: grid;
    grid-template: minmax(auto, 75px) 80% / auto;
    grid-template-areas:
        "search"
        "temps";
    width: 100%;
    height: 100%;
`;



function checkCityNameForNumber(cityName) {
    let cityNameArray = cityName.split('');
    return cityNameArray.some((char) => {
        return (char != " " && !isNaN(char));
    });
}

class Forecast extends Component {
    
    constructor(props) {
        super(props);

        this.state = { forecastData: {}, tilesLoading: false, error: '', cityName: '' };

        this.getForecast = this.getForecast.bind(this);
        this.onChangeCityName = this.onChangeCityName.bind(this);
    }
    
    onChangeCityName (event) {
        if(isNaN(event.target.value)) {
            //Cannot use numbers in the city name
            if(checkCityNameForNumber(event.target.value)) {
                this.setState({ error: 'Cannot use numbers in the city name'});
            } else {
                this.setState({ error: ''})
            }
            
            this.setState({ cityName: event.target.value });
        } else {
            this.setState({ error: 'Cannot use numbers'})
        }
    }

    async getForecast(event) {
        event.preventDefault();
        this.setState({ tilesLoading: true })
        const API = OpenWeatherAPI;
        const cityName = this.state.cityName !== '' ? this.state.cityName : 'New York';
        const results = await API.fiveDayAverageCityName(cityName);
        if(results.cod !== '200') {
            let error = '';
            if(results.message !== 'city not found') {
                console.log(results.message);
                error = 'OOPS. Something went wrong';
            } else {
                error = 'City Not Found';
            }
            this.setState({ tilesLoading: false, error: error, forecastData: {} })
        } else {
            this.setState({ forecastData: results, tilesLoading: false, error: '' });
        }
    }

    render() {
        return (
            <ForecastMain>
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
            </ForecastMain>
        )
    }
};

export default Forecast;