import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SearchBarDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SearchInput = styled.input`
    border: none;
    background: none;
    border-bottom: 1px solid black;
`;

const SearchButton = styled.button`

`;

const SearchBar = props => {    
    return (
        <SearchBarDiv>
            <SearchInput 
                onChange={props.onChangeCityName} 
                value={props.cityName}
            />
            <SearchButton 
                onClick={() => props.getForecast()}
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