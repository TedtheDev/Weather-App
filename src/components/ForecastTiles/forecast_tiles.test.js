import React from 'react';
import { shallow } from 'enzyme';
import ForecastTiles from './forecast_tiles';

describe('<ForecastTiles />', () => {
    test.skip('should render one forecast tile', () => {
        const component = shallow(<ForecastTiles/>);

        expect(component.find('div').length).toEqual(1);
    });
});