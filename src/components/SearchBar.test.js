import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';

expect.extend(toHaveNoViolations);

// test('should not have any accessibility violations', async () => {
//     const { container } = render(<SearchBar form='' />);
//     const results = await axe(container);
//     expect(results).toHaveNoViolations();
// });


describe('The <SearchBar/> component', () => {

    it('should not fail any accessibility tests', async () => {
        const { container } = render(<SearchBar />);
        expect(await axe(container)).toHaveNoViolations();
    });

});
