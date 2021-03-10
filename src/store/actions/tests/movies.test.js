import mockStore from '../../mockStore';
import fetchMock from 'fetch-mock';
import FETCH_MOVIES_API_URL from '../../../const/';
import * as types from '../../action-types/';
import { fetchMovies } from '../../actions/movies';

describe('movies action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

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

    return store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
