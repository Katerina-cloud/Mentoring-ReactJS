import { createSelector } from 'reselect';

const editMovieSelector = (state) => state.moviesData.editMovie;

export default createSelector(editMovieSelector, (editMovie) => ({
  editMovie,
}));
