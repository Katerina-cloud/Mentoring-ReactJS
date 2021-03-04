import { connect } from 'react-redux';
import {
  moviesSelector,
  filterGenreSelector,
  editMovieSelector,
  deleteMovieSelector,
  addMovieSelector,
  sortParameterSelector,
} from '../../store/selectors/';
import {
  loadMovies,
  openAddMovie,
  openEditMovie,
  openDeleteMovie,
  cancelAddMovie,
  cancelEditMovie,
  cancelDeleteMovie,
  submitAddMovie,
  submitEditMovie,
  submitDeleteMovie,
  clearEditMovie,
} from './actions.js';

const mapStateToProps = (state) => ({
  movies: moviesSelector(state),
  filterGenre: filterGenreSelector(state),
  editMovie: editMovieSelector(state),
  deleteMovie: deleteMovieSelector(state),
  addMovie: addMovieSelector(state),
  sortParameter: sortParameterSelector(state),
});

const mapDispatchToProps = {
  loadMovies,
  openAddMovie,
  openEditMovie,
  openDeleteMovie,
  cancelAddMovie,
  cancelEditMovie,
  cancelDeleteMovie,
  submitAddMovie,
  submitEditMovie,
  submitDeleteMovie,
  clearEditMovie,
};

export const HomePageContainer = connect(mapStateToProps, mapDispatchToProps);
