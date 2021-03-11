import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { EditMovieModal } from '../';

const mockDispatch = jest.fn();
const mockAppState = {
  moviesData: {
    editMovie: {
      budget: 175000000,
      genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
      id: 354912,
      overview:
        'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel',
      poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
      release_date: '2017-10-27',
      revenue: 700920729,
      runtime: 105,
      tagline: 'The celebration of a lifetime',
      title: 'Coco',
      vote_average: 7.8,
      vote_count: 3619,
    },
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => mockDispatch),
}));

describe('EditMovieModal', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  it('snapshot', () => {
    const tree = render(<EditMovieModal />);
    expect(tree).toMatchSnapshot();
  });

  it('if isOpen false modal not rendered', () => {
    render(<EditMovieModal isOpen={false} />);

    const editModal = screen.queryByText('EDIT MOVIE');
    expect(editModal).not.toBeInTheDocument();
  });

  it('if isOpen true render modal', () => {
    render(<EditMovieModal isOpen={true} />);

    const editModal = screen.getByText('EDIT MOVIE');
    expect(editModal).toBeInTheDocument();
  });

  it('fire handleEditCancel on close button click', () => {
    const editCancel = jest.fn();
    render(<EditMovieModal isOpen={true} handleEditCancel={editCancel} />);
    const closeBtn = screen.getByText('X');
    userEvent.click(closeBtn);
    expect(editCancel).toHaveBeenCalledTimes(1);
  });
});
