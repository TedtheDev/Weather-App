import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.header`
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    background: #009494;
    color: #F5F2DC;
    box-shadow: 0 0 2px #000;
`;

const Header = props => {
    return (
        <HeaderDiv>Five Day Forecast</HeaderDiv>
    );
}

export default Header;