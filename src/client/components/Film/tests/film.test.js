import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Film } from '../';

describe('Film', () => {
  it('snapshot', () => {
    const tree = render(
      <Film
        id={23334}
        title="Shades"
        genres={['Comedy']}
        year="2019"
        imageSource="https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg"
        openDeleteMovie={() => {}}
        openEditMovie={() => {}}
      />,
      { wrapper: MemoryRouter },
    );

    expect(tree).toMatchSnapshot();
  });
});
