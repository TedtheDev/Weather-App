import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './search_bar';

describe('<SearchBar />', () => {
    test('should have a placeholder of City Name', () => {
        const component = shallow(<SearchBar onChangeCityName={jest.fn}/>);

        console.log(component)
    });
});