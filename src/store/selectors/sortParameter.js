import { createSelector } from 'reselect';

const sortParameterSelector = (state) => state.moviesData.sortParameter;

export const selectSortParameter = createSelector(sortParameterSelector, (sortParameter) => ({
  sortParameter,
}));
