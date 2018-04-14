import React from 'react';
import App from './app';
import rednerer from 'react-test-renderer';

describe('<App />', () => {
    test('should render correctly', () => {
        const component = rednerer.create(
            <App />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});