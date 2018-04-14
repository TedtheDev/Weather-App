import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

describe('<App />', () => {
    test('should render correctly', () => {
        const component = renderer.create(
            <App />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});