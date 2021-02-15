import { createSelector } from 'reselect';

const editMovieSelector = (state) => state.moviesData.editMovie;

export const selectEditMovie = createSelector(editMovieSelector, (movieToEdit) => ({
  movieToEdit,
}));
