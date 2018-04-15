import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SearchBarDiv = styled.div`
    
`;

const SearchInput = styled.input`

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