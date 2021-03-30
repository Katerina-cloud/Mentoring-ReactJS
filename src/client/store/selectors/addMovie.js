import { createSelector } from 'reselect';

const addMovie = (state) => state.moviesData.addMovie;

export const addMovieSelector = createSelector(addMovie, (movieToAdd) => movieToAdd);
