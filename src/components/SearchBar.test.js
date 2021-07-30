import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import SearchBar from './SearchBar';

expect.extend(toHaveNoViolations);


describe('The <SearchBar/> component', () => {

    it('should not fail any accessibility tests', async () => {
        const { container } = render(<SearchBar />);
        expect(await axe(container)).toHaveNoViolations();
    });

});
