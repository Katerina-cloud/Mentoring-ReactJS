import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
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
  // submitAddMovie,
  // submitEditMovie,
  submitDeleteMovie,
  movies,
  filterGenre,
  editMovie,
  deleteMovie,
  addMovie,
  sortParameter,
}) => {
  const { criteria: searchTitle } = useParams();
  // const dispatch = useDispatch();

  useEffect(() => {
    loadMovies();
    // dispatch(fetchMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const editSubmitHandler = () => {
    // dispatch(editMovie(movieToEdit));
  };

  const openAddMovieHandler = () => {
    openAddMovie();
  };
  const addCancelHandler = () => {
    cancelAddMovie();
  };
  const addSubmitHandler = () => {
    // dispatch(addMovie(movieToAdd));
    // dispatch(clearAddMovie(null));
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
