import { editMovieSelector } from '../';

describe('editMovieSelector', () => {
  it('editMovieSelector unit test', () => {
    const editMovieState = {
      title: 'Test Title',
      poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
      overview: 'long overwiew',
      runtime: 180,
      release_date: '2021-03-18',
      genres: ['crime'],
    };

    const selected = editMovieSelector.resultFunc(editMovieState);

    expect(selected).toStrictEqual(editMovieState);
  });
});
