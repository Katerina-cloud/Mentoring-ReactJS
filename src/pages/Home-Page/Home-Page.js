import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  Header,
  Footer,
  FilterBar,
  Film,
  DeleteMovieModal,
  EditMovieModal,
  AddMovieModal,
} from '../../components/';
import { filterMovies, sortMovies } from '../../services/movie';

export const HomePage = ({
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
  movies,
  editMovie,
  addMovie,
  filterGenre,
  deleteMovie,
  sortParameter,
}) => {
  const { criteria: searchTitle } = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const filterConfig = { searchTitle, filterGenre };
  const filteredMovies = filterMovies(movies, filterConfig);
  const sortedMovies = sortMovies(filteredMovies, sortParameter);

  const shouldOpenEditModal = Boolean(editMovie);
  const shouldOpenDeleteModal = Boolean(deleteMovie);
  const shouldOpenAddModal = Boolean(addMovie);

  const openEditMovieHandler = (filmId) => {
    openEditMovie(filmId, movies);
  };

  const openDeleteMovieHandler = (filmId) => {
    openDeleteMovie(filmId, movies);
  };

  const deleteCancelHandler = () => cancelDeleteMovie();

  const deleteSubmitHandler = () => {
    submitDeleteMovie(deleteMovie);
  };

  const editCancelHandler = () => cancelEditMovie();

  const editSubmitHandler = (movieEdit) => {
    submitEditMovie(movieEdit);
  };

  const openAddMovieHandler = () => {
    openAddMovie();
  };
  const addCancelHandler = () => {
    cancelAddMovie();
  };
  const addSubmitHandler = (movieToAdd) => {
    submitAddMovie(movieToAdd);
  };

  return (
    <>
      <Header openAddMovie={openAddMovieHandler} />
      <main className="home-page__main">
        <div className="home-page__filter">
          <FilterBar />
        </div>
        <div className="home-page__films">
          {sortedMovies.map((item, index) => (
            <div key={index} className="home-page__film">
              <Film
                id={item.id}
                year={item.release_date}
                title={item.title}
                genres={item.genres}
                imageSource={item.poster_path}
                openEditMovie={() => {
                  openEditMovieHandler(item.id);
                }}
                openDeleteMovie={() => {
                  openDeleteMovieHandler(item.id);
                }}
              />
            </div>
          ))}
        </div>
        <EditMovieModal
          isOpen={shouldOpenEditModal}
          handleEditCancel={editCancelHandler}
          handleEditSubmit={editSubmitHandler}
        />
        <DeleteMovieModal
          isOpen={shouldOpenDeleteModal}
          handleDeleteCancel={deleteCancelHandler}
          handleDeleteSubmit={deleteSubmitHandler}
        />
        <AddMovieModal
          isOpen={shouldOpenAddModal}
          handleAddCancel={addCancelHandler}
          handleAddSubmit={addSubmitHandler}
        />
      </main>
      <Footer />
    </>
  );
};

HomePage.propTypes = {
  loadMovies: PropTypes.func,
  openAddMovie: PropTypes.func,
  openEditMovie: PropTypes.func,
  openDeleteMovie: PropTypes.func,
  cancelAddMovie: PropTypes.func,
  cancelEditMovie: PropTypes.func,
  cancelDeleteMovie: PropTypes.func,
  submitAddMovie: PropTypes.func,
  submitEditMovie: PropTypes.func,
  submitDeleteMovie: PropTypes.func,
  movies: PropTypes.array,
  editMovie: PropTypes.object,
  addMovie: PropTypes.object,
  filterGenre: PropTypes.string,
  deleteMovie: PropTypes.object,
  sortParameter: PropTypes.string,
};
