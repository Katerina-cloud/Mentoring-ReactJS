import { createSelector } from 'reselect';

const filterGenreData = (state) => state.moviesData.filterGenre;

export const filterGenreSelector = createSelector(filterGenreData, (filterGenre) => filterGenre);
