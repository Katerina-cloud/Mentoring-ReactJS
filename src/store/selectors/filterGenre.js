import { createSelector } from 'reselect';

const filterGenreSelector = (state) => state.moviesData.filterGenre;

export const selectFilterGenre = createSelector(filterGenreSelector, (filterGenre) => ({
  filterGenre,
}));
