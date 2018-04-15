import React, { Component } from 'react';

import SearchBar from './SearchBar/search_bar';

class SearchBarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {cityName: '' }

        this.onChangeCityName = this.onChangeCityName.bind(this);
        
    }

    onChangeCityName (event) {
        this.setState({ cityName: event.target.value });
    }

    render() {
        return (
            <SearchBar 
                getForecast={this.props.getForecast} 
                onChangeCityName={this.onChangeCityName}
                cityName={this.state.cityName}
            />
        )
    }
}

export default SearchBarContainer;