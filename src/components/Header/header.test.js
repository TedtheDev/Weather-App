import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    test('should contain Hi from Header', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find('div').text()).toBe('Hi from Header');
    });
});