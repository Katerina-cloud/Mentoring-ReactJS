import {
  MOVIES_SUCCESS,
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
} from '../action-types/';

const initialState = {
  movies: [],
  editMovie: null,
  deleteMovie: null,
  addMovie: null,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SUCCESS:
      console.log(action.payload.data);
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
    case EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.findIndex(action.payload.id),
      };
    case EDIT_MOVIE:
      return {
        ...state,
      };
    case EDIT_MOVIE_FAIL:
      return {
        ...state,
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
    default:
      return state;
  }
};
