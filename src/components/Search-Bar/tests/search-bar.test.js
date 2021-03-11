import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const mockHistory = { push: jest.fn() };
jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => mockHistory),
}));

describe('SearchBar', () => {
  it('snapshot', () => {
    const tree = render(<SearchBar />);
    expect(tree).toMatchSnapshot();
  });

  it('should call history.push on search click', async () => {
    render(<SearchBar />);
    const search = screen.getByText('Search');
    userEvent.click(search);
    expect(mockHistory.push).toHaveBeenCalled();
  });
  it('enter value onChange', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/What do you want to watch/i);
    userEvent.type(input, 'shades');
    expect(input.value).toBe('shades');
  });
});
