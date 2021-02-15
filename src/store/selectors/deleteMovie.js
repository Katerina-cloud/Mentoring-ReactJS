import { createSelector } from 'reselect';

const deleteMovieSelector = (state) => state.moviesData.deleteMovie;

export default createSelector(deleteMovieSelector, (deleteMovie) => ({
  deleteMovie,
}));
