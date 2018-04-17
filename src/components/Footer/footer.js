import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
    grid-area: footer;
    background: #009494;
`;

const Footer = props => {
    return (
        <FooterDiv></FooterDiv>
    )
};

export default Footer;