import { createSelector } from 'reselect';

const sortParameterData = (state) => state.moviesData.sortParameter;

export const sortParameterSelector = createSelector(
  sortParameterData,
  (sortParameter) => sortParameter,
);
