import {
  fetchMovies,
  setEditMovie,
  setDeleteMovie,
  clearDeleteMovie,
  deleteMovie,
  clearEditMovie,
  // editMovie,
  setAddMovie,
  clearAddMovie,
  // addMovie,
} from '../../store/actions/movies';

export const loadMovies = () => (dispatch) => {
  dispatch(fetchMovies());
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

export const submitEditMovie = () => (dispatch) => {
  // dispatch(editMovie(movieToEdit));
};

export const openAddMovie = () => (dispatch) => {
  dispatch(setAddMovie(true));
};
export const cancelAddMovie = () => (dispatch) => {
  dispatch(clearAddMovie(null));
};
export const submitAddMovie = () => (dispatch) => {
  // dispatch(addMovie(movieToAdd));
  // dispatch(clearAddMovie(null));
};
