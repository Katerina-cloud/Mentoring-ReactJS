import {
  MOVIES_SUCCESS,
  SET_EDIT_MOVIE,
  CLEAR_EDIT_MOVIE,
  SET_DELETE_MOVIE,
  CLEAR_DELETE_MOVIE,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
} from '../action-types/';

const initialState = {
  movies: [],
  editMovie: null,
  deleteMovie: null,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.data,
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
      };
    default:
      return state;
  }
};
