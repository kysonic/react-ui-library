import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Form from '.';

describe('Form', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
