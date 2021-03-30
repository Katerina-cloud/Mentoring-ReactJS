import { combineReducers } from 'redux';
import { moviesReducer } from './movies';

export const appReducer = combineReducers({
  moviesData: moviesReducer,
});
