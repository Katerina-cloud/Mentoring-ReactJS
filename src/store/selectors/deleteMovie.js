import { createSelector } from 'reselect';

const deleteMovieSelector = (state) => state.moviesData.deleteMovie;

export const selectDeleteMovie = createSelector(deleteMovieSelector, (movieToDelete) => ({
  movieToDelete,
}));
