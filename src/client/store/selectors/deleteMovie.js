import { createSelector } from 'reselect';

const deleteMovie = (state) => state.moviesData.deleteMovie;

export const deleteMovieSelector = createSelector(deleteMovie, (movieToDelete) => movieToDelete);
