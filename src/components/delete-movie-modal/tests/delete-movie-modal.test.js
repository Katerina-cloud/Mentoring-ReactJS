import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { DeleteMovieModal } from '../';

describe('DeleteMovieModal', () => {
  it('snapshot', () => {
    const tree = render(<DeleteMovieModal />);
    expect(tree).toMatchSnapshot();
  });

  it('if isOpen false modal not rendered', () => {
    render(<DeleteMovieModal isOpen={false} />);

    const deleteModal = screen.queryByText('DELETE MOVIE');
    expect(deleteModal).not.toBeInTheDocument();
  });

  it('if isOpen true render modal', () => {
    render(<DeleteMovieModal isOpen={true} />);

    const deleteModal = screen.getByText('DELETE MOVIE');
    expect(deleteModal).toBeInTheDocument();
  });

  it('fire handleDeleteCancel on close button click', () => {
    const deleteCancel = jest.fn();
    render(<DeleteMovieModal isOpen={true} handleDeleteCancel={deleteCancel} />);
    const closeBtn = screen.getByText('X');
    userEvent.click(closeBtn);
    expect(deleteCancel).toHaveBeenCalledTimes(1);
  });

  it('fire handleDeleteSubmit on confirm button click', () => {
    const deleteSubmit = jest.fn();
    render(<DeleteMovieModal isOpen={true} handleDeleteSubmit={deleteSubmit} />);
    const confirmBtn = screen.getByText('Confirm');
    userEvent.click(confirmBtn);
    expect(deleteSubmit).toHaveBeenCalledTimes(1);
  });
});
