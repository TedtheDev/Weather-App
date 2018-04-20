import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SearchBarForm = styled.form`
    grid-area: search;
    display: grid;
    grid-template: 80% 20% / 50% 10% 40%;
    grid-template-areas: 
        "search . searchButton"
        "error . .";
    width: 100%;
    height: 100%;
    position: sticky;
    top: 1%;
    z-index: 10;
    background: #F5F2DC;
`;

const SearchInput = styled.input`
    grid-area: search;
    border: none;
    background: none;
    border-bottom: 2px solid #454445;
    color: #00585E;
    font-size: 1rem;
    &:focus {
        -webkit-tap-highlight-color: rgb(0,0,0);
        outline: none;
    }
`;

const SearchButton = styled.button`
    cursor: pointer;
    grid-area: searchButton;
    border-radius: 5px;
    border: none;
    color: #FFF;
    background: #65737F;
    &:focus {
        -webkit-tap-highlight-color: rgb(0,0,0);
    }
`;

const Erorr = styled.div`
    grid-area: error;
    color: red;
`;

const SearchBar = props => {
    return (
        <SearchBarForm onSubmit={props.getForecast}>
            <SearchInput
                placeholder="City Name"
                onChange={props.onChangeCityName} 
                value={props.cityName}
            />
            <Erorr>{props.error}</Erorr>
            <SearchButton type="submit">
                Get Forecast
            </SearchButton>
        </SearchBarForm>
    )
}


SearchBar.propTypes = {
    getForecast: PropTypes.func.isRequired,
    onChangeCityName: PropTypes.func.isRequired,
    cityName: PropTypes.string
}

export default SearchBar;