import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SearchBarDiv = styled.div`
    display: grid;
    grid-template: 80% 20% / 50% 50%;
    grid-template-areas: 
        "search searchButton"
        "error .";
`;

const SearchInput = styled.input`
    grid-area: search;
    border: none;
    background: none;
    border-bottom: 1px solid black;
`;

const SearchButton = styled.button`
    grid-area: searchButton;
    border-radius: 5px;
    border: none;
    color: #FFF;
    background: #65737F;
`;

const Erorr = styled.div`
    grid-area: error;
    color: red;
`;

const SearchBar = props => {    
    return (
        <SearchBarDiv>
            <SearchInput
                placeholder="City Name"
                onChange={props.onChangeCityName} 
                value={props.cityName}
            />
            <Erorr>{props.error}</Erorr>
            <SearchButton 
                onClick={() => props.getForecast(props.cityName)}
            >
                Get Forecast
            </SearchButton>
        </SearchBarDiv>
    )
}


SearchBar.propTypes = {
    getForecast: PropTypes.func.isRequired,
    onChangeCityName: PropTypes.func.isRequired,
    cityName: PropTypes.string
}

export default SearchBar;