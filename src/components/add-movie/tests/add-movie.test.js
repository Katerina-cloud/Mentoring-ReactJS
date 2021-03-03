import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { AddMovie } from '../add-movie';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => mockDispatch),
}));

describe('add-movie', () => {
  it('snapshot', () => {
    const tree = render(<AddMovie />);
    expect(tree).toMatchSnapshot();
  });

  it('rendering and submitting AddMovie Formik form', async () => {
    const handleAddSubmit = jest.fn();
    render(<AddMovie handleAddSubmit={handleAddSubmit} />);

    userEvent.type(screen.getByLabelText(/title/i), 'Movie Title');
    userEvent.type(
      screen.getByLabelText(/movie url/i),
      'https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg',
    );
    userEvent.type(screen.getByLabelText(/genre/i), 'comedy');
    userEvent.type(screen.getByLabelText(/overview/i), 'a good comedy movie');
    userEvent.type(screen.getByLabelText(/runtime/i), '90');
    userEvent.type(screen.getByLabelText(/release date/i), '2020-01-02');

    userEvent.click(screen.getByRole('button', { name: /Save/i }));

    await waitFor(() => {
      // expect(mockDispatch).toHaveBeenCalledTimes(3);
      expect(handleAddSubmit).toHaveBeenCalled();
    });
  });
});
