import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../';

describe('Header', () => {
  it('snapshot', () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
