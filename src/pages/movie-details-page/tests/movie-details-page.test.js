import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MovieDetailsPage } from '../';
import { fetchMovies } from '../../../store/actions/movies';

window.scrollTo = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => mockDispatch),
  useSelector: jest.fn(() => []),
}));

describe('MovieDetailsPage', () => {
  it('snapshot', () => {
    const tree = render(<MovieDetailsPage />, { wrapper: MemoryRouter });

    expect(tree).toMatchSnapshot();
  });

  // it('fetchMovies is called if there are no movies from selector', () => {
  //   render(<MovieDetailsPage />, { wrapper: MemoryRouter });

  //   expect(fetchMovies.toHaveBeenCalled();
  // });
});
