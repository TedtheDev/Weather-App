import React, { Component } from 'react';

import SearchBar from './SearchBar/search_bar';

class SearchBarContainer extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <SearchBar 
                getForecast={this.props.getForecast} 
                onChangeCityName={this.props.onChangeCityName}
                cityName={this.props.cityName}
                error={this.props.error}
            />
        )
    }
}

export default SearchBarContainer;