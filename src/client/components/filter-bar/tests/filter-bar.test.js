import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import { FilterBar } from '../';

const mockDispatch = jest.fn();
const mockAppState = {
  moviesData: {
    movies: [
      {
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
      {
        budget: 19500000,
        genres: ['Drama', 'Fantasy', 'Romance'],
        id: 399055,
        overview:
          'An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.',
        poster_path: 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg',
        release_date: '2017-12-01',
        revenue: 185545281,
        runtime: 123,
        tagline: 'A Fairy Tale for Troubled Times',
        title: 'The Shape of Water',
        vote_average: 7.3,
        vote_count: 3200,
      },
    ],
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => mockDispatch),
}));

describe('FilterBar', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  it('snapshot', () => {
    const tree = render(<FilterBar />);
    expect(tree).toMatchSnapshot();
  });
});
