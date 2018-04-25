import React from 'react';
import { mount, shallow } from 'enzyme';
import ForecastContainer from './forecast_container';

jest.mock('../../services/openweathermap.js');

describe('<ForecastContainer />', () => {
    test('should be able to enter a City Name - Chicago', () => {
        const component = mount(<ForecastContainer />);

        const cityName = 'Chicago'
        // Simulate entering a city name
        component.find('input').simulate('change', {target: { value: cityName}});

        expect(component.find('input').props().value).toBe('Chicago');
    });

    test('should not be able to enter a city name with just numbers - 2222', () => {
        const component = mount(<ForecastContainer />);

        const cityName = '2222'
        // Simulate entering a city name
        component.find('input').simulate('change', {target: { value: cityName}});

        expect(component.find('input').props().value).toBe('');
    });

    test('should show error \'Cannot use numbers\' when user types in number - 2222', () => {
        const component = mount(<ForecastContainer />);

        const cityName = '2222'
        // Simulate entering a city name
        component.find('input').simulate('change', {target: { value: cityName}});

        expect(component.find('SearchBar div').text()).toBe('Cannot use numbers');
    });

    test('should be able to enter a city name with letters AND numbers together - Denver2', () => {
        const component = mount(<ForecastContainer />);

        const cityName = 'Denver2'
        // Simulate entering a city name
        component.find('input').simulate('change', {target: { value: cityName}});

        expect(component.find('input').props().value).toBe('Denver2');
    });

    test('should show error \'Cannot use numbers in the city name\' when user enters city name with letters AND numbers - Denver2', () => {
        const component = mount(<ForecastContainer />);

        const cityName = 'Denver2'
        // Simulate entering a city name
        component.find('input').simulate('change', {target: { value: cityName}});

        expect(component.find('SearchBar div').text()).toBe('Cannot use numbers in the city name');
    });
    
    test('should now show any errors - Peoria, Arizona', () => {
        const component = mount(<ForecastContainer />);

        const cityName = 'Peoria, Arizona'
        // Simulate entering a city name
        component.find('input').simulate('change', {target: { value: cityName}});

        expect(component.find('SearchBar div').text()).toBe('');
    });

    test('should clear errors related to mix of letters and numbers - Denver2', () => {
        const component = mount(<ForecastContainer />);

        const cityName = 'Denver2'
        // Simulate entering a city name
        component.find('input').simulate('change', {target: { value: cityName}});
        component.find('input').simulate('change', {target: { value: 'Denver'}});

        expect(component.find('SearchBar div').text()).toBe('');
    });

    test('should fetch weather data from OpenWeatherMap and mounts data into 5 ForecastTiles', (done) => {
        // city is chicago weather data in jest mocks
        const component = mount(<ForecastContainer />);
        component.find('input').simulate('change', {target: { value: 'Chicago'}});
        component.find('form').simulate('submit');

        // trick to fake out javascript async calls
        // use setTimeout function to wait for 'network request', 
        // i.e next tick in the event queue
        setTimeout(() => {
            component.update();
            expect(component.find('ForecastTile').length).toEqual(5);
            done();
        });
    });

    test('should fetch weather data, but handle error on city not found from OpenWeatherMap and mounts and error', (done) => {
        // city is chicago weather datain jest mocks
        const component = mount(<ForecastContainer />);
        component.find('input').simulate('change', {target: { value: 'dhdhdh'}});
        component.find('form').simulate('submit');

        // trick to fake out javascript async calls
        // use setTimeout function to wait for 'network request', 
        // i.e next tick in the event queue
        setTimeout(() => {
            component.update();

            // expect error in state of the component
            expect(component.state().error).toEqual('City Not Found');

            // expect error to be displayed in div in SearchBar component
            expect(component.find('SearchBar div').text()).toEqual('City Not Found');
            done();
        });
    });
});