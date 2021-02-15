import { createSelector } from 'reselect';

const moviesSelector = (state) => state.moviesData.movies;

export default createSelector(moviesSelector, (movies) => ({
  movies,
}));
