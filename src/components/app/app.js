import React, { Component } from 'react';
import 'babel-polyfill';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';


import Header from '../Header/header';
import ForecastContainer from '../ForecastContainer/forecast_container';
import Footer from '../Footer/footer';

const AppDiv = styled.div`
    width:  100%;
    height: 100%;
    display: grid;
    grid-template: 10% auto 10% / 10% auto 10%;
    grid-template-areas: 
        "header header header"
        ". app ."
        "footer footer footer";
        background: #F5F2DC;
    overflow-y: auto;
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
                    <Footer />
                </AppDiv>
            </Router>
        );
    }
};

export default App;