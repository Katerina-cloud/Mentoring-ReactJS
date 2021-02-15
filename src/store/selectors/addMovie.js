import { createSelector } from 'reselect';

const addMovieSelector = (state) => state.moviesData.addMovie;

export const selectAddMovie = createSelector(addMovieSelector, (movieToAdd) => ({
  movieToAdd,
}));
