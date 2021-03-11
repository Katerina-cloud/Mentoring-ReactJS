import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '../';

describe('Logo', () => {
  it('snapshot', () => {
    const tree = render(<Logo />);
    expect(tree).toMatchSnapshot();
  });
});
