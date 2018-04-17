import React from 'react';
import { mount } from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    test('should contain Five Day Forecast', () => {
        const wrapper = mount(<Header />);
        expect(wrapper.find('header').text()).toBe('Five Day Forecast');
    });
});