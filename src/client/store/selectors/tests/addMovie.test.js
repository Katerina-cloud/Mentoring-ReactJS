import { addMovieSelector } from '../';

describe('addMovieSelector', () => {
  it('addMovieSelector unit test', () => {
    const addMovieState = {
      title: 'Test Title',
      poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
      overview: 'long overwiew',
      runtime: 180,
      release_date: '2021-03-18',
      genres: ['crime'],
    };

    const selected = addMovieSelector.resultFunc(addMovieState);

    expect(selected).toStrictEqual(addMovieState);
  });
});
