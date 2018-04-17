import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
    grid-area: footer;
    box-shadow: 0 0 2px #000;
    background: #009494;
`;

const Footer = props => {
    return (
        <FooterDiv></FooterDiv>
    )
};

export default Footer;