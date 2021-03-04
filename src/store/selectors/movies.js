import { createSelector } from 'reselect';

const moviesData = (state) => state.moviesData.movies;

export const moviesSelector = createSelector(moviesData, (movies) => movies);
