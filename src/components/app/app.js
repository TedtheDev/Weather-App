import React, { Component } from 'react';
import 'babel-polyfill';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';


import Header from '../Header/header';
import ForecastContainer from '../ForecastContainer/forecast_container';

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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { forecastData: {}}

        this.updateForecastData = this.updateForecastData.bind(this);
    }

    updateForecastData(data) {
        this.setState({ forecastData: data});
    }

    render() {
        return (
            <Router>
                <AppDiv>
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => <ForecastContainer />} />
                    </Switch>
                </AppDiv>
            </Router>
        );
    }
};

export default App;