import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App />', () => {
    test('should contain a div with Hi from App', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('div').text()).toBe('Hi from app');
    });
});