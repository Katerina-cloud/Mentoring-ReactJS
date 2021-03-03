import React from 'react';
import { render } from '@testing-library/react';
import { Chip } from '../';

describe('Chip', () => {
  it('snapshot', () => {
    const tree = render(<Chip year="2009" />);
    expect(tree).toMatchSnapshot();
  });
});
