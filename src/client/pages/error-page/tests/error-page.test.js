import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ErrorPage } from '../';

describe('ErrorPage', () => {
  it('snapshot', () => {
    const tree = render(<ErrorPage />, { wrapper: MemoryRouter });

    expect(tree).toMatchSnapshot();
  });
});
