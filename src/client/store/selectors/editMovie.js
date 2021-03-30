import { createSelector } from 'reselect';

const editMovie = (state) => state.moviesData.editMovie;

export const editMovieSelector = createSelector(editMovie, (movieToEdit) => movieToEdit);
