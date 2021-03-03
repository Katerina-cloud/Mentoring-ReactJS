import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from '../';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => mockDispatch),
}));

describe('Dropdown', () => {
  it('snapshot', () => {
    const tree = render(<Dropdown />);
    expect(tree).toMatchSnapshot();
  });
});
