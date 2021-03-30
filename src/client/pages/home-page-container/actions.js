import {
  fetchMovies,
  setEditMovie,
  setDeleteMovie,
  clearDeleteMovie,
  deleteMovie,
  clearEditMovie,
  setAddMovie,
  clearAddMovie,
  editMovie,
  addMovie,
} from '../../store/actions/movies';

export const loadMovies = () => (dispatch) => {
  return dispatch(fetchMovies());
};

export const openEditMovie = (filmId, movies) => (dispatch) => {
  const movie = movies.find(({ id }) => id === filmId);
  dispatch(setEditMovie(movie));
};

export const openDeleteMovie = (filmId, movies) => (dispatch) => {
  const movie = movies.find(({ id }) => id === filmId);
  dispatch(setDeleteMovie(movie));
};

export const cancelDeleteMovie = () => (dispatch) => dispatch(clearDeleteMovie());

export const submitDeleteMovie = (movieToDelete) => (dispatch) => {
  dispatch(deleteMovie(movieToDelete.id));
  dispatch(clearDeleteMovie());
};

export const cancelEditMovie = () => (dispatch) => dispatch(clearEditMovie());

export const submitEditMovie = (movieEdit) => (dispatch) => {
  dispatch(setEditMovie(movieEdit));
  dispatch(editMovie(movieEdit));
  dispatch(clearEditMovie());
};

export const openAddMovie = () => (dispatch) => {
  dispatch(setAddMovie(true));
};
export const cancelAddMovie = () => (dispatch) => {
  dispatch(clearAddMovie(null));
};
export const submitAddMovie = (movieToAdd) => (dispatch) => {
  dispatch(setAddMovie(movieToAdd));
  dispatch(addMovie(movieToAdd));
  dispatch(clearAddMovie(null));
};
