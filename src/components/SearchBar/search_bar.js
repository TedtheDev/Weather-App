import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBarDiv = styled.div`
    grid-area: app;
`;

const SearchInput = styled.input`

`;

const SearchButton = styled.button`

`;

const SearchBar = props => {
    return (
        <SearchBarDiv>
            <SearchInput></SearchInput>
            <SearchButton>Get Forecast</SearchButton>
        </SearchBarDiv>
    )
}


SearchBar.propTypes = {

}

export default SearchBar;