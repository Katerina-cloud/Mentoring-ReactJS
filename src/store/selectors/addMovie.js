import { createSelector } from 'reselect';

const addMovieSelector = (state) => state.moviesData.addMovie;

export default createSelector(addMovieSelector, (addMovie) => ({
  addMovie,
}));
