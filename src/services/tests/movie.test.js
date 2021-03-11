import { isDefaultFiltering, filterMovies, sortMovies } from '../movie';
import { SORTINGS } from '../../const/sortings';

const movies = [
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
];

describe('movie service', () => {
  it('movie service isDefaultFiltering', () => {
    expect(isDefaultFiltering(SORTINGS.ALL)).toBe(true);
  });

  it('movie service filterMovies find by title and genre', () => {
    const searchCriteria = {
      searchTitle: 'coco',
      filterGenre: 'Comedy',
    };
    const movieToFind = movies.find((m) => m.title === 'Coco');
    expect(filterMovies(movies, searchCriteria)).toStrictEqual([movieToFind]);
  });

  it('movie service filterMovies find all movies', () => {
    const searchCriteria = {
      searchTitle: '',
      filterGenre: SORTINGS.ALL,
    };
    expect(filterMovies(movies, searchCriteria)).toStrictEqual(movies);
  });

  it('movie service filterMovies find no movies', () => {
    const searchCriteria = {
      searchTitle: '',
      filterGenre: '',
    };
    expect(filterMovies(movies, searchCriteria)).toStrictEqual([]);
  });

  it('movie service sortMovies sort by vote_average', () => {
    const morePopular = movies.find((m) => m.vote_average === 7.8);
    const lessPopular = movies.find((m) => m.vote_average === 7.3);

    expect(sortMovies(movies, SORTINGS.VOTE_AVERAGE)).toStrictEqual([morePopular, lessPopular]);
  });

  it('movie service sortMovies sort by release_date', () => {
    const newerMovie = movies.find((m) => m.release_date === '2017-12-01');
    const olderMovie = movies.find((m) => m.release_date === '2017-10-27');

    expect(sortMovies(movies, SORTINGS.VOTE_AVERAGE)).toStrictEqual([olderMovie, newerMovie]);
  });
});
