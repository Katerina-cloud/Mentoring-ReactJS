import { moviesSelector } from '../';

describe('moviesSelector', () => {
  it('moviesSelector unit test', () => {
    const moviesState = [
      {
        id: 337167,
        title: 'Fi',
        poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        overview:
          'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
        runtime: 106,
        release_date: '2018-02-07',
      },
      {
        title: 'Test Title',
        poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        overview: 'long overwiew',
        runtime: 180,
        release_date: '2021-03-18',
        genres: ['crime'],
      },
    ];
    const selected = moviesSelector.resultFunc(moviesState);

    expect(selected).toStrictEqual(moviesState);
  });
});
