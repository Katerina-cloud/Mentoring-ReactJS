import React from 'react';
import { render } from '@testing-library/react';
import { HeaderMovieDetails } from '../';

const movie = {
  budget: 45000000,
  genres: ['Comedy', 'Music'],
  id: 353616,
  overview: 'After the highs of winning the world championships.',
  poster_path: 'https://image.tmdb.org/t/p/w500/fchHLsLjFvzAFSQykiMwdF1051.jpg',
  release_date: '2017-12-21',
  revenue: 183600000,
  runtime: 93,
  tagline: 'Last Call Pitches',
  title: 'Pitch Perfect 3',
  vote_average: 6.4,
  vote_count: 727,
};

describe('HeaderMovieDetails', () => {
  it('snapshot', () => {
    const tree = render(<HeaderMovieDetails movie={movie} />);
    expect(tree).toMatchSnapshot();
  });
});
