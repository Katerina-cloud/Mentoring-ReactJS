import {
  MOVIES_SUCCESS,
  MOVIES_FAIL,
  SET_EDIT_MOVIE,
  CLEAR_EDIT_MOVIE,
  SET_DELETE_MOVIE,
  CLEAR_DELETE_MOVIE,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_FAIL,
  CLEAR_ADD_MOVIE,
  SET_ADD_MOVIE,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  SET_FILTER_GENRE,
  CLEAR_FILTER_GENRE,
  SET_SORT_PARAMETER,
} from '../action-types/';

import { SORTINGS } from '../../const/sortings';

const initialState = {
  movies: [],
  editMovie: null,
  deleteMovie: null,
  addMovie: null,
  error: null,
  filterGenre: SORTINGS.ALL,
  sortParameter: 'release_date',
};

export const moviesReducer = (state = initialState, action) => {
  let newMovies;
  switch (action.type) {
    case MOVIES_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        movies: action.payload.data,
      };
    case MOVIES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_EDIT_MOVIE:
      return {
        ...state,
        editMovie: action.payload,
      };
    case CLEAR_EDIT_MOVIE:
      return {
        ...state,
        editMovie: null,
      };
    case EDIT_MOVIE_SUCCESS:
      newMovies = [...state.movies];
      newMovies[newMovies.findIndex((movie) => movie.id === action.payload.id)] = action.payload;
      return {
        ...state,
        movies: newMovies,
      };
    case EDIT_MOVIE:
      return {
        ...state,
      };
    case EDIT_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_DELETE_MOVIE:
      return {
        ...state,
        deleteMovie: action.payload,
      };
    case CLEAR_DELETE_MOVIE:
      return {
        ...state,
        deleteMovie: null,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case DELETE_MOVIE:
      return {
        ...state,
      };
    case DELETE_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_ADD_MOVIE:
      return {
        ...state,
        addMovie: action.payload,
      };
    case CLEAR_ADD_MOVIE:
      return {
        ...state,
        addMovie: null,
      };
    case ADD_MOVIE:
      return {
        ...state,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case ADD_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_FILTER_GENRE:
      return {
        ...state,
        filterGenre: action.payload,
      };
    case CLEAR_FILTER_GENRE:
      return {
        ...state,
        filterGenre: null,
      };
    case SET_SORT_PARAMETER:
      return {
        ...state,
        sortParameter: action.payload,
      };

    default:
      return state;
  }
};
