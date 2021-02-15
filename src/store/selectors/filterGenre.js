import { createSelector } from 'reselect';

const filterGenreSelector = (state) => state.moviesData.filterGenre;

export default createSelector(filterGenreSelector, (filterGenre) => ({
  filterGenre,
}));
