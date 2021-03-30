import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { DottedIconDropdown } from '../';

describe('DottedIconDropdown', () => {
  it('snapshot', () => {
    const tree = render(<DottedIconDropdown />);
    expect(tree).toMatchSnapshot();
  });
});
