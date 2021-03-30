import React from 'react';
import { render } from '@testing-library/react';
import { Raiting } from '../';

describe('Raiting', () => {
  it('snapshot', () => {
    const tree = render(<Raiting raiting="6,7" />);
    expect(tree).toMatchSnapshot();
  });
});
