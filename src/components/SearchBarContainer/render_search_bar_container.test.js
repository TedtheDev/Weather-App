import React from 'react';
import SearchBarContainer from './search_bar_container';
import renderer from 'react-test-renderer';

describe('<SearchBarContainer />', () => {
    test('renders correctly', () => {
        const component = renderer.create(<SearchBarContainer getForecast={jest.fn} onChangeCityName={jest.fn}/>);

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});