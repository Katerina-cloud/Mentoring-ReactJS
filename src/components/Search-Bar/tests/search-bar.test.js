import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from '../';

describe('SearchBar', () => {
  it('snapshot', () => {
    const tree = render(<SearchBar />);
    expect(tree).toMatchSnapshot();
  });
});
