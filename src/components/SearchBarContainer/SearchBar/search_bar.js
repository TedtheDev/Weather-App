import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SearchBarDiv = styled.form`
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
    color: #00585E;
    font-size: 1rem;
`;

const SearchButton = styled.button`
    cursor: pointer;
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
        <SearchBarDiv onSubmit={props.getForecast}>
            <SearchInput
                placeholder="City Name"
                onChange={props.onChangeCityName} 
                value={props.cityName}
            />
            <Erorr>{props.error}</Erorr>
            <SearchButton type="submit">
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