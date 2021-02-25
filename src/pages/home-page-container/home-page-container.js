import { connect } from 'react-redux';
import {
  selectMovies,
  selectFilterGenre,
  selectEditMovie,
  selectDeleteMovie,
  selectAddMovie,
  selectSortParameter,
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
  movies: selectMovies(state),
  filterGenre: selectFilterGenre(state),
  editMovie: selectEditMovie(state),
  deleteMovie: selectDeleteMovie(state),
  addMovie: selectAddMovie(state),
  sortParameter: selectSortParameter(state),
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
