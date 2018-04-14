import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';

describe('<Header />', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <Header />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});