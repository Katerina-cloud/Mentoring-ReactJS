import mockStore from '../../mockStore';
import fetchMock from 'fetch-mock';
import { SORTINGS } from '../../../const/sortings';
import FETCH_MOVIES_API_URL from '../../../const/';
import * as types from '../../action-types/';
import * as actions from '../../actions/movies';

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
const editMovie = {
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
const deleteMovie = {
  budget: 175000000,
  genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
  id: 354912,
  overview: 'Extraordinary journey to unlock the real story behind',
  poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
  release_date: '2017-10-27',
  revenue: 700920729,
  runtime: 105,
  tagline: 'The celebration of a lifetime',
  title: 'Coco',
  vote_average: 7.8,
  vote_count: 3619,
};
const addMovie = {
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
};

describe('movies actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetchMovies', () => {
    it('dispatches the correct actions on unsuccessful fetch request', () => {
      fetchMock.mock(`${FETCH_MOVIES_API_URL}`, {
        headers: { authorization: '', 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.MOVIES_LOAD },
        {
          type: types.MOVIES_FAIL,
          payload: Error(
            'fetch-mock: No fallback response defined for GET to http://localhost:4000/movies/',
          ),
        },
      ];

      const store = mockStore({
        moviesData: { movies: [] },
        error: 'fetch-mock: No fallback response defined for GET to http://localhost:4000/movies/',
      });

      return store.dispatch(actions.fetchMovies()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('dispatches the correct actions on successful fetch request', async () => {
      fetchMock.getOnce(FETCH_MOVIES_API_URL, {
        body: movies,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.MOVIES_LOAD },
        {
          type: types.MOVIES_SUCCESS,
          payload: movies,
        },
      ];

      const store = mockStore({
        moviesData: { movies },
      });

      return store.dispatch(actions.fetchMovies()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('setEditMovie', () => {
    it('should create an action to set editMovie', () => {
      const expectedAction = {
        type: types.SET_EDIT_MOVIE,
        payload: editMovie,
      };
      const store = mockStore({
        editMovie,
      });

      store.dispatch(actions.setEditMovie(editMovie));
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('clearEditMovie', () => {
    it('should create an action to clear editMovie', () => {
      const expectedAction = {
        type: types.CLEAR_EDIT_MOVIE,
      };
      const store = mockStore({});

      store.dispatch(actions.clearEditMovie());
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('editMovie', () => {
    it('dispatches the correct actions on unsuccessful fetch request', () => {
      fetchMock.putOnce(`${FETCH_MOVIES_API_URL}`, {
        headers: { authorization: '', 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.EDIT_MOVIE },
        {
          type: types.EDIT_MOVIE_FAIL,
          payload: Error(
            'fetch-mock: No fallback response defined for PUT to http://localhost:4000/movies/',
          ),
        },
      ];

      const store = mockStore({
        moviesData: { movies: [] },
        error: 'fetch-mock: No fallback response defined for PUT to http://localhost:4000/movies/',
      });

      return store.dispatch(actions.editMovie(editMovie)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('dispatches the correct actions on successful fetch request', async () => {
      fetchMock.putOnce(FETCH_MOVIES_API_URL, {
        body: editMovie,
      });

      const expectedActions = [
        { type: types.EDIT_MOVIE },
        {
          type: types.EDIT_MOVIE_SUCCESS,
          payload: editMovie,
        },
      ];

      const store = mockStore({});

      return store.dispatch(actions.editMovie(editMovie)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('setDeleteMovie', () => {
    it('should create an action to set deleteMovie', () => {
      const expectedAction = {
        type: types.SET_DELETE_MOVIE,
        payload: deleteMovie,
      };
      const store = mockStore({
        deleteMovie,
      });

      store.dispatch(actions.setDeleteMovie(deleteMovie));
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('clearDeleteMovie', () => {
    it('should create an action to clear deleteMovie', () => {
      const expectedAction = {
        type: types.CLEAR_DELETE_MOVIE,
      };
      const store = mockStore({});

      store.dispatch(actions.clearDeleteMovie());
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('deleteMovie', () => {
    const id = '13213';
    it('dispatches the correct actions on unsuccessful fetch request', () => {
      fetchMock.mock(`${FETCH_MOVIES_API_URL}`, {});

      const expectedActions = [
        { type: types.DELETE_MOVIE },
        {
          type: types.DELETE_MOVIE_FAIL,
          payload: Error(
            'fetch-mock: No fallback response defined for DELETE to http://localhost:4000/movies/13213',
          ),
        },
      ];

      const store = mockStore({
        moviesData: { movies: [] },
        error:
          'ffetch-mock: No fallback response defined for DELETE to http://localhost:4000/movies/13213',
      });

      return store.dispatch(actions.deleteMovie(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('dispatches the correct actions on successful fetch request', async () => {
      fetchMock.deleteOnce(FETCH_MOVIES_API_URL, {});

      const expectedActions = [
        { type: types.DELETE_MOVIE },
        {
          type: types.DELETE_MOVIE_SUCCESS,
          payload: id,
        },
      ];

      const store = mockStore({});

      return store.dispatch(actions.deleteMovie(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('setAddMovie', () => {
    it('should create an action to set addMovie', () => {
      const expectedAction = {
        type: types.SET_ADD_MOVIE,
        payload: addMovie,
      };
      const store = mockStore({
        deleteMovie,
      });

      store.dispatch(actions.setAddMovie(addMovie));
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('clearAddMovie', () => {
    it('should create an action to clear addMovie', () => {
      const expectedAction = {
        type: types.CLEAR_ADD_MOVIE,
      };
      const store = mockStore({});

      store.dispatch(actions.clearAddMovie());
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('addMovie', () => {
    it('dispatches the correct actions on unsuccessful fetch request', () => {
      fetchMock.postOnce(`${FETCH_MOVIES_API_URL}`, {
        headers: { authorization: '', 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.ADD_MOVIE },
        {
          type: types.ADD_MOVIE_FAIL,
          payload: Error(
            'fetch-mock: No fallback response defined for POST to http://localhost:4000/movies/',
          ),
        },
      ];

      const store = mockStore({
        moviesData: { movies: [] },
        error: 'fetch-mock: No fallback response defined for POST to http://localhost:4000/movies/',
      });

      return store.dispatch(actions.addMovie(addMovie)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('dispatches the correct actions on successful fetch request', async () => {
      fetchMock.postOnce(FETCH_MOVIES_API_URL, {
        body: addMovie,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.ADD_MOVIE },
        {
          type: types.ADD_MOVIE_SUCCESS,
          payload: addMovie,
        },
      ];

      const store = mockStore({
        moviesData: { movies },
      });

      return store.dispatch(actions.addMovie(addMovie)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('setFilterGenre', () => {
    it('should create an action to set filterGenre', () => {
      const expectedAction = {
        type: types.SET_FILTER_GENRE,
        payload: SORTINGS.ALL,
      };
      const store = mockStore({
        filterGenre: SORTINGS.ALL,
      });

      store.dispatch(actions.setFilterGenre(SORTINGS.ALL));
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('clearFilterGenre', () => {
    it('should create an action to clear filterGenre', () => {
      const expectedAction = {
        type: types.CLEAR_FILTER_GENRE,
      };
      const store = mockStore({});

      store.dispatch(actions.clearFilterGenre());
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });

  describe('setSortParameter', () => {
    it('should create an action to set sortParameter', () => {
      const expectedAction = {
        type: types.SET_SORT_PARAMETER,
        payload: SORTINGS.RELEASE_DATE,
      };
      const store = mockStore({});

      store.dispatch(actions.setSortParameter(SORTINGS.RELEASE_DATE));
      expect(...store.getActions()).toEqual(expectedAction);
    });
  });
});
