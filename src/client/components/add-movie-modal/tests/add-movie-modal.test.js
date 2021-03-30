import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AddMovieModal } from '../add-movie-modal';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => mockDispatch),
}));

describe('add-movie-modal', () => {
  it('snapshot', () => {
    const tree = render(
      <AddMovieModal isOpen={true} handleAddSubmit={() => {}} handleAddCancel={() => {}} />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('if isOpen true render modal', () => {
    render(<AddMovieModal isOpen={true} />);

    const addModal = screen.getByText('Add movie');
    expect(addModal).toBeInTheDocument();
  });

  it('if isOpen false do not render modal', () => {
    render(<AddMovieModal isOpen={false} />);

    const addModal = screen.queryByText('Add movie');
    expect(addModal).not.toBeInTheDocument();
  });
});
