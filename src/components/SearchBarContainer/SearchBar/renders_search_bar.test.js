import React from 'react';
import SearchBar from './search_bar';
import renderer from 'react-test-renderer';

describe('<SearchBar />', () => {
    test('renders correctly', () => {
        const component = renderer.create(<SearchBar onChangeCityName={jest.fn} getForecast={jest.fn} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});