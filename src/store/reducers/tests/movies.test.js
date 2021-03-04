import { moviesReducer } from '../movies';
import { SORTINGS } from '../../../const/sortings';
import * as types from '../../action-types/index';

const initialState = {
  movies: [],
  editMovie: null,
  deleteMovie: null,
  addMovie: null,
  error: null,
  filterGenre: SORTINGS.ALL,
  sortParameter: 'release_date',
};

const movies = [
  {
    budget: 175000000,
    genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
    id: 354912,
    overview:
      'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and togeth',
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
    overview: 'An other-worldly story, set against the backdrop of Cold War era .',
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
describe('moviesReducer', () => {
  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle MOVIES_SUCCESS', () => {
    expect(
      moviesReducer(initialState, {
        type: types.MOVIES_SUCCESS,
        payload: { data: movies },
      }),
    ).toEqual({
      ...initialState,
      movies: movies,
    });
  });

  it('should handle MOVIES_FAIL', () => {
    const error = expect.any(Error);
    expect(
      moviesReducer(initialState, {
        type: types.MOVIES_FAIL,
        payload: error,
      }),
    ).toEqual({
      ...initialState,
      error: error,
    });
  });

  it('should handle SET_EDIT_MOVIE', () => {
    expect(
      moviesReducer(initialState, {
        type: types.SET_EDIT_MOVIE,
        payload: {
          id: 118340,
          title: 'Guardians of the Galaxy',
          tagline: 'All heroes start somewhere.',
          vote_average: 7.9,
          vote_count: 12376,
        },
      }),
    ).toEqual({
      ...initialState,
      editMovie: {
        id: 118340,
        title: 'Guardians of the Galaxy',
        tagline: 'All heroes start somewhere.',
        vote_average: 7.9,
        vote_count: 12376,
      },
    });
  });

  it('should handle CLEAR_EDIT_MOVIE', () => {
    expect(
      moviesReducer(
        {
          movies: movies,
          editMovie: {
            id: 118340,
            title: 'Guardians of the Galaxy',
            tagline: 'All heroes start somewhere.',
            vote_average: 7.9,
            vote_count: 12376,
          },
          deleteMovie: null,
          addMovie: null,
          error: null,
          filterGenre: SORTINGS.ALL,
          sortParameter: 'release_date',
        },
        {
          type: types.CLEAR_EDIT_MOVIE,
        },
      ),
    ).toEqual({
      movies: movies,
      deleteMovie: null,
      addMovie: null,
      error: null,
      filterGenre: SORTINGS.ALL,
      sortParameter: 'release_date',
      editMovie: null,
    });
  });

  it('should handle EDIT_MOVIE_SUCCESS', () => {
    expect(
      moviesReducer(
        {
          movies: [
            {
              id: 354912,
              title: 'Coco',
              tagline: 'The celebration of a lifetime',
              vote_average: 7.8,
              vote_count: 3619,
            },
            {
              id: 399055,
              title: 'The Shape',
              tagline: 'A',
              vote_average: 7.3,
              vote_count: 3200,
            },
          ],
          editMovie: {
            id: 399055,
            title: 'The Shape of Water',
            tagline: 'A Fairy Tale for Troubled Times',
            vote_average: 7.3,
            vote_count: 3200,
          },
          deleteMovie: null,
          addMovie: null,
          error: null,
          filterGenre: SORTINGS.ALL,
          sortParameter: 'release_date',
        },
        {
          type: types.EDIT_MOVIE_SUCCESS,
          payload: {
            id: 399055,
            title: 'The Shape of Water',
            tagline: 'A Fairy Tale for Troubled Times',
            vote_average: 7.3,
            vote_count: 3200,
          },
        },
      ),
    ).toEqual({
      movies: [
        {
          id: 354912,
          title: 'Coco',
          tagline: 'The celebration of a lifetime',
          vote_average: 7.8,
          vote_count: 3619,
        },
        {
          id: 399055,
          title: 'The Shape of Water',
          tagline: 'A Fairy Tale for Troubled Times',
          vote_average: 7.3,
          vote_count: 3200,
        },
      ],
      editMovie: {
        id: 399055,
        title: 'The Shape of Water',
        tagline: 'A Fairy Tale for Troubled Times',
        vote_average: 7.3,
        vote_count: 3200,
      },
      deleteMovie: null,
      addMovie: null,
      error: null,
      filterGenre: SORTINGS.ALL,
      sortParameter: 'release_date',
    });
  });

  it('should handle EDIT_MOVIE_FAIL', () => {
    const error = expect.any(Error);
    expect(
      moviesReducer(initialState, {
        type: types.EDIT_MOVIE_FAIL,
        payload: error,
      }),
    ).toEqual({
      ...initialState,
      error: error,
    });
  });

  it('should handle SET_DELETE_MOVIE', () => {
    expect(
      moviesReducer(initialState, {
        type: types.SET_DELETE_MOVIE,
        payload: {
          id: 118340,
          title: 'Guardians of the Galaxy',
          tagline: 'All heroes start somewhere.',
          vote_average: 7.9,
          vote_count: 12376,
        },
      }),
    ).toEqual({
      ...initialState,
      deleteMovie: {
        id: 118340,
        title: 'Guardians of the Galaxy',
        tagline: 'All heroes start somewhere.',
        vote_average: 7.9,
        vote_count: 12376,
      },
    });
  });

  it('should handle CLEAR_DELETE_MOVIE', () => {
    expect(
      moviesReducer(
        {
          movies: movies,
          deleteMovie: {
            id: 118340,
            title: 'Guardians of the Galaxy',
            tagline: 'All heroes start somewhere.',
            vote_average: 7.9,
            vote_count: 12376,
          },
          editMovie: null,
          addMovie: null,
          error: null,
          filterGenre: SORTINGS.ALL,
          sortParameter: 'release_date',
        },
        {
          type: types.CLEAR_DELETE_MOVIE,
        },
      ),
    ).toEqual({
      movies: movies,
      editMovie: null,
      deleteMovie: null,
      addMovie: null,
      error: null,
      filterGenre: SORTINGS.ALL,
      sortParameter: 'release_date',
    });
  });

  it('should handle DELETE_MOVIE_SUCCESS', () => {
    expect(
      moviesReducer(
        {
          movies: [
            {
              id: 354912,
              title: 'Coco',
              tagline: 'The celebration of a lifetime',
              vote_average: 7.8,
              vote_count: 3619,
            },
            {
              id: 399055,
              title: 'The Shape of Water',
              tagline: 'A Fairy Tale for Troubled Times',
              vote_average: 7.3,
              vote_count: 3200,
            },
          ],
          deleteMovie: {
            id: 399055,
            title: 'The Shape of Water',
            tagline: 'A Fairy Tale for Troubled Times',
            vote_average: 7.3,
            vote_count: 3200,
          },
          editMovie: null,
          addMovie: null,
          error: null,
          filterGenre: SORTINGS.ALL,
          sortParameter: 'release_date',
        },
        {
          type: types.DELETE_MOVIE_SUCCESS,
          payload: 399055,
        },
      ),
    ).toEqual({
      movies: [
        {
          id: 354912,
          title: 'Coco',
          tagline: 'The celebration of a lifetime',
          vote_average: 7.8,
          vote_count: 3619,
        },
      ],
      editMovie: null,
      deleteMovie: {
        id: 399055,
        title: 'The Shape of Water',
        tagline: 'A Fairy Tale for Troubled Times',
        vote_average: 7.3,
        vote_count: 3200,
      },
      addMovie: null,
      error: null,
      filterGenre: SORTINGS.ALL,
      sortParameter: 'release_date',
    });
  });

  it('should handle DELETE_MOVIE_FAIL', () => {
    const error = expect.any(Error);
    expect(
      moviesReducer(initialState, {
        type: types.DELETE_MOVIE_FAIL,
        payload: error,
      }),
    ).toEqual({
      ...initialState,
      error: error,
    });
  });

  it('should handle SET_ADD_MOVIE', () => {
    expect(
      moviesReducer(initialState, {
        type: types.SET_ADD_MOVIE,
        payload: {
          id: 118340,
          title: 'Guardians of the Galaxy',
          tagline: 'All heroes start somewhere.',
          vote_average: 7.9,
          vote_count: 12376,
        },
      }),
    ).toEqual({
      ...initialState,
      addMovie: {
        id: 118340,
        title: 'Guardians of the Galaxy',
        tagline: 'All heroes start somewhere.',
        vote_average: 7.9,
        vote_count: 12376,
      },
    });
  });

  it('should handle CLEAR_ADD_MOVIE', () => {
    expect(
      moviesReducer(
        {
          movies: movies,
          addMovie: {
            id: 118340,
            title: 'Guardians of the Galaxy',
            tagline: 'All heroes start somewhere.',
            vote_average: 7.9,
            vote_count: 12376,
          },
          editMovie: null,
          deleteMovie: null,
          error: null,
          filterGenre: SORTINGS.ALL,
          sortParameter: 'release_date',
        },
        {
          type: types.CLEAR_ADD_MOVIE,
        },
      ),
    ).toEqual({
      movies: movies,
      editMovie: null,
      deleteMovie: null,
      addMovie: null,
      error: null,
      filterGenre: SORTINGS.ALL,
      sortParameter: 'release_date',
    });
  });

  it('should handle ADD_MOVIE_SUCCESS', () => {
    expect(
      moviesReducer(
        {
          movies: [
            {
              id: 354912,
              title: 'Coco',
              tagline: 'The celebration of a lifetime',
              vote_average: 7.8,
              vote_count: 3619,
            },
            {
              id: 399055,
              title: 'The Shape of Water',
              tagline: 'A Fairy Tale for Troubled Times',
              vote_average: 7.3,
              vote_count: 3200,
            },
          ],
          addMovie: {
            id: 268896,
            title: 'Pacific Rim: Uprising',
            tagline: 'Rise Up',
            vote_average: 6,
            vote_count: 318,
          },
          deleteMovie: null,
          editMovie: null,
          error: null,
          filterGenre: SORTINGS.ALL,
          sortParameter: 'release_date',
        },
        {
          type: types.ADD_MOVIE_SUCCESS,
          payload: {
            id: 268896,
            title: 'Pacific Rim: Uprising',
            tagline: 'Rise Up',
            vote_average: 6,
            vote_count: 318,
          },
        },
      ),
    ).toEqual({
      movies: [
        {
          id: 354912,
          title: 'Coco',
          tagline: 'The celebration of a lifetime',
          vote_average: 7.8,
          vote_count: 3619,
        },
        {
          id: 399055,
          title: 'The Shape of Water',
          tagline: 'A Fairy Tale for Troubled Times',
          vote_average: 7.3,
          vote_count: 3200,
        },
        {
          id: 268896,
          title: 'Pacific Rim: Uprising',
          tagline: 'Rise Up',
          vote_average: 6,
          vote_count: 318,
        },
      ],
      addMovie: {
        id: 268896,
        title: 'Pacific Rim: Uprising',
        tagline: 'Rise Up',
        vote_average: 6,
        vote_count: 318,
      },
      deleteMovie: null,
      editMovie: null,
      error: null,
      filterGenre: SORTINGS.ALL,
      sortParameter: 'release_date',
    });
  });

  it('should handle ADD_MOVIE_FAIL', () => {
    const error = expect.any(Error);
    expect(
      moviesReducer(initialState, {
        type: types.ADD_MOVIE_FAIL,
        payload: error,
      }),
    ).toEqual({
      ...initialState,
      error: error,
    });
  });

  it('should handle SET_FILTER_BY_GENRE', () => {
    expect(
      moviesReducer(initialState, {
        type: types.SET_FILTER_BY_GENRE,
        payload: 'comedy',
      }),
    ).toEqual({
      ...initialState,
      filterGenre: 'comedy',
    });
  });

  it('should handle CLEAR_FILTER_BY_GENRE', () => {
    expect(
      moviesReducer(initialState, {
        type: types.CLEAR_FILTER_BY_GENRE,
        payload: null,
      }),
    ).toEqual({
      ...initialState,
      filterGenre: null,
    });
  });

  it('should handle SET_SORT_PARAMETER', () => {
    expect(
      moviesReducer(initialState, {
        type: types.SET_SORT_PARAMETER,
        payload: SORTINGS.VOTE_AVERAGE,
      }),
    ).toEqual({
      ...initialState,
      sortParameter: SORTINGS.VOTE_AVERAGE,
    });
  });
});
