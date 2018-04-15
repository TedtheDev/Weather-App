import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
`;

const Header = props => {
    return (
        <HeaderDiv>Five Day Forecast</HeaderDiv>
    );
}

export default Header;