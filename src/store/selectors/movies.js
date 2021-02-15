import { createSelector } from 'reselect';

const moviesSelector = (state) => state.moviesData.movies;

export const selectMovies = createSelector(moviesSelector, (movies) => ({
  movies,
}));
