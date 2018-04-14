import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

import SearchBar from '../SearchBar/search_bar';

const AppDiv = styled.div`
    width:  100%;
    height: 100%;
    display: grid;
    grid-template: 10vh auto 10vh / 10vw auto 10vw;
    grid-template-areas: 
        "header header header"
        ". app ."
        "footer footer footer";
`;

const App = props => {
    return (
        <Router>
            <AppDiv>
                <div>Hi from app</div>
                <Switch>
                    <Route exact path="/" component={SearchBar} />
                </Switch>
            </AppDiv>
        </Router>
    );
};

export default App;