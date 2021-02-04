// import axios from 'axios';
import {
  MOVIES_LOAD,
  MOVIES_SUCCESS,
  MOVIES_FAIL,
  SET_EDIT_MOVIE,
  CLEAR_EDIT_MOVIE,
  SET_DELETE_MOVIE,
  CLEAR_DELETE_MOVIE,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  CLEAR_ADD_MOVIE,
  SET_ADD_MOVIE,
  ADD_MOVIE,
} from '../action-types/';
import { FETCH_MOVIES_API_URL } from '../../const/';

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: MOVIES_LOAD });
    try {
      const response = await fetch(FETCH_MOVIES_API_URL);
      const data = await response.json();

      dispatch({
        type: MOVIES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: MOVIES_FAIL,
        payload: err,
      });
    }
  };
};

export const setEditMovie = (movie) => {
  return (dispatch) => {
    dispatch({
      type: SET_EDIT_MOVIE,
      payload: movie,
    });
  };
};

export const clearEditMovie = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_EDIT_MOVIE,
    });
  };
};

export const setDeleteMovie = (movie) => {
  return (dispatch) => {
    dispatch({
      type: SET_DELETE_MOVIE,
      payload: movie,
    });
  };
};

export const clearDeleteMovie = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_DELETE_MOVIE,
    });
  };
};

export const deleteMovie = (movieId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_MOVIE });
    try {
      await fetch(FETCH_MOVIES_API_URL + String(movieId), {
        method: 'DELETE',
      });

      dispatch({
        type: DELETE_MOVIE_SUCCESS,
        payload: movieId,
      });
    } catch (err) {
      dispatch({
        type: DELETE_MOVIE_FAIL,
        payload: err,
      });
    }
  };
};

export const setAddMovie = (movie) => {
  return (dispatch) => {
    dispatch({
      type: SET_ADD_MOVIE,
      payload: movie,
    });
  };
};

export const clearAddMovie = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ADD_MOVIE,
    });
  };
};

export const addMovie = (movie) => {
  console.log('action ADD_MOVIE');
  return (dispatch) => {
    dispatch({
      type: ADD_MOVIE,
      payload: movie,
    });
  };
};
// export const fetchMovies = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: MOVIES_LOAD });
//       const response = await axios.get(FETCH_MOVIES_API_URL);
//       console.log('result', response);
//       const data = response.data.data;
//       console.log('result', data);
//       dispatch({
//         type: MOVIES_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({ type: MOVIES_FAIL, error });
//     }
//   };
// };
