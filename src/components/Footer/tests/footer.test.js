import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../';

describe('Footer', () => {
  it('snapshot', () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
