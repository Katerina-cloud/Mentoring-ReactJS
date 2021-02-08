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
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  SET_FILTER_BY_GENRE,
  CLEAR_FILTER_BY_GENRE,
} from '../action-types/';

const initialState = {
  movies: [],
  editMovie: null,
  deleteMovie: null,
  addMovie: null,
  error: null,
  filterByGenre: null,
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
    case SET_FILTER_BY_GENRE:
      return {
        ...state,
        filterByGenre: action.payload,
      };
    case CLEAR_FILTER_BY_GENRE:
      return {
        ...state,
        filterByGenre: null,
      };
    default:
      return state;
  }
};
