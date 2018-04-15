import React from 'react';
import ForecastContainer from './forecast_container';
import renderer from 'react-test-renderer';

describe('<ForecastContainer />', () => {
    test('renders correctly', () => {
        const component = renderer.create(<ForecastContainer />);

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});