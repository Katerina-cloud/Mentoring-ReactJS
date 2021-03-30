import { appReducer } from '../index';
import { moviesReducer } from '../movies';
import { SORTINGS } from '../../../const/sortings';
import { createStore } from 'redux';

describe('appReducer', () => {
  const initialState = {
    movies: [],
    editMovie: null,
    deleteMovie: null,
    addMovie: null,
    error: null,
    filterGenre: SORTINGS.ALL,
    sortParameter: 'release_date',
  };

  it('check that initial state of the root reducer matches what child reducers return given an empty action', () => {
    let store = createStore(appReducer);
    expect(store.getState().moviesData).toEqual(moviesReducer(initialState, {}));
  });
});
