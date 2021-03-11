import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../';

describe('Modal', () => {
  it('snapshot', () => {
    const tree = render(<Modal title="Add movie" />);
    expect(tree).toMatchSnapshot();
  });
});
