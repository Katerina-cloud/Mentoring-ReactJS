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
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAIL,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_FAIL,
  SET_FILTER_GENRE,
  CLEAR_FILTER_GENRE,
  SET_SORT_PARAMETER,
} from '../action-types';
import { FETCH_MOVIES_API_URL } from '../../const/';

const doLoadMovies = () => ({ type: MOVIES_LOAD });
const doLoadMoviesSuccess = (payload) => ({
  type: MOVIES_SUCCESS,
  payload,
});
const doLoadMoviesFail = (payload) => ({
  type: MOVIES_FAIL,
  payload,
});
const doSetEditMovie = (payload) => ({
  type: SET_EDIT_MOVIE,
  payload,
});
const doClearEditMovie = () => ({ type: CLEAR_EDIT_MOVIE });
const doEditMovie = () => ({ type: EDIT_MOVIE });
const doEditMoviesSuccess = (payload) => ({
  type: EDIT_MOVIE_SUCCESS,
  payload,
});
const doEditMoviesFail = (payload) => ({
  type: EDIT_MOVIE_FAIL,
  payload,
});
const doSetDeleteMovie = (payload) => ({
  type: SET_DELETE_MOVIE,
  payload,
});
const doClearDeleteMovie = () => ({ type: CLEAR_DELETE_MOVIE });
const doDeleteMovie = () => ({ type: DELETE_MOVIE });
const doDeleteMoviesSuccess = (payload) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload,
});
const doDeleteMoviesFail = (payload) => ({
  type: DELETE_MOVIE_FAIL,
  payload,
});
const doSetAddMovie = (payload) => ({
  type: SET_ADD_MOVIE,
  payload,
});
const doClearAddMovie = () => ({ type: CLEAR_ADD_MOVIE });
const doAddMovie = () => ({ type: ADD_MOVIE });
const doAddMoviesSuccess = (payload) => ({
  type: ADD_MOVIE_SUCCESS,
  payload,
});
const doAddMoviesFail = (payload) => ({
  type: ADD_MOVIE_FAIL,
  payload,
});
const doSetFilterGenre = (payload) => ({
  type: SET_FILTER_GENRE,
  payload,
});
const doClearFilterGenre = () => ({ type: CLEAR_FILTER_GENRE });
const doSetSortParameter = (payload) => ({
  type: SET_SORT_PARAMETER,
  payload,
});

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(doLoadMovies());
    try {
      const response = await fetch(FETCH_MOVIES_API_URL);
      const data = await response.json();

      dispatch(doLoadMoviesSuccess(data));
    } catch (err) {
      dispatch(doLoadMoviesFail(err));
    }
  };
};

export const setEditMovie = (movie) => {
  return (dispatch) => {
    dispatch(doSetEditMovie(movie));
  };
};

export const clearEditMovie = () => {
  return (dispatch) => {
    dispatch(doClearEditMovie());
  };
};

export const editMovie = (movie) => {
  return async (dispatch) => {
    dispatch(doEditMovie());
    try {
      let response = await fetch(FETCH_MOVIES_API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(movie),
      });

      if (response.ok) {
        let result = await response.json();
        dispatch(doEditMoviesSuccess(result));
      } else {
        dispatch(doEditMoviesFail(response.status));
      }
    } catch (error) {
      dispatch(doEditMoviesFail(error));
    }
  };
};

export const setDeleteMovie = (movie) => {
  return (dispatch) => {
    dispatch(doSetDeleteMovie(movie));
  };
};

export const clearDeleteMovie = () => {
  return (dispatch) => {
    dispatch(doClearDeleteMovie());
  };
};

export const deleteMovie = (movieId) => {
  return async (dispatch) => {
    dispatch(doDeleteMovie());
    try {
      await fetch(FETCH_MOVIES_API_URL + String(movieId), {
        method: 'DELETE',
      });
      dispatch(doDeleteMoviesSuccess(movieId));
    } catch (err) {
      dispatch(doDeleteMoviesFail(err));
    }
  };
};

export const setAddMovie = (movie) => {
  return (dispatch) => {
    dispatch(doSetAddMovie(movie));
  };
};

export const clearAddMovie = () => {
  return (dispatch) => {
    dispatch(doClearAddMovie());
  };
};

export const addMovie = (movie) => {
  return async (dispatch) => {
    dispatch(doAddMovie());
    try {
      let response = await fetch(FETCH_MOVIES_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(movie),
      });

      if (response.ok) {
        let result = await response.json();

        dispatch(doAddMoviesSuccess(result));
      } else {
        dispatch(doAddMoviesFail(response.status));
      }
    } catch (error) {
      dispatch(doAddMoviesFail(error));
    }
  };
};

export const setFilterGenre = (genre) => {
  return (dispatch) => {
    dispatch(doSetFilterGenre(genre));
  };
};

export const clearFilterGenre = () => {
  return (dispatch) => {
    dispatch(doClearFilterGenre());
  };
};

export const setSortParameter = (sortParam) => {
  return (dispatch) => {
    dispatch(doSetSortParameter(sortParam));
  };
};

//fetch using axios
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
