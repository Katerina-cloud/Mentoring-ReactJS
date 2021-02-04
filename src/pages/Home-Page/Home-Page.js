import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovies,
  setEditMovie,
  setDeleteMovie,
  clearDeleteMovie,
  deleteMovie,
  clearEditMovie,
  editMovie,
  setAddMovie,
  clearAddMovie,
  // addMovie,
} from '../../store/actions/movies';
import {
  Header,
  Footer,
  FilterBar,
  Film,
  DeleteMovieModal,
  EditMovieModal,
  AddMovieModal,
} from '../../components/';

export const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesData.movies);
  const movieToEdit = useSelector((state) => state.moviesData.editMovie);
  const movieToDelete = useSelector((state) => state.moviesData.deleteMovie);
  const movieToAdd = useSelector((state) => state.moviesData.addMovie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const shouldOpenEditModal = Boolean(movieToEdit);
  const shouldOpenDeleteModal = Boolean(movieToDelete);
  const shouldOpenAddModal = Boolean(movieToAdd);

  const openEditMovie = (filmId) => {
    const movie = movies.find(({ id }) => id === filmId);
    dispatch(setEditMovie(movie));
  };

  const openDeleteMovie = (filmId) => {
    const movie = movies.find(({ id }) => id === filmId);
    dispatch(setDeleteMovie(movie));
  };

  const handleDeleteCancel = () => dispatch(clearDeleteMovie());
  const handleDeleteSubmit = () => {
    dispatch(deleteMovie(movieToDelete.id));
    dispatch(clearDeleteMovie());
  };

  const handleEditCancel = () => dispatch(clearEditMovie());

  const handleEditSubmit = () => {
    dispatch(editMovie(movieToEdit.id));
    dispatch(clearEditMovie());
  };

  const openAddMovie = () => {
    dispatch(setAddMovie(true));
  };
  const handleAddCancel = () => {
    dispatch(clearAddMovie(null));
  };
  const handleAddSubmit = () => {
    // dispatch(addMovie(movieToAdd));
    console.log('movieToAdd', movieToAdd);
    dispatch(clearAddMovie(null));
  };

  return (
    <>
      <Header openAddMovie={openAddMovie} />
      <main className="home-page__main">
        <div className="home-page__filter">
          <FilterBar />
        </div>
        <div className="home-page__films">
          {movies.map((item, index) => (
            <div key={index} className="home-page__film">
              <Film
                year={item.release_date}
                title={item.title}
                genres={item.genres}
                imageSource={item.poster_path}
                openEditMovie={() => {
                  openEditMovie(item.id);
                }}
                openDeleteMovie={() => {
                  openDeleteMovie(item.id);
                }}
              />
            </div>
          ))}
        </div>
        <EditMovieModal
          isOpen={shouldOpenEditModal}
          handleEditCancel={handleEditCancel}
          handleEditSubmit={handleEditSubmit}
        />
        <DeleteMovieModal
          isOpen={shouldOpenDeleteModal}
          handleDeleteCancel={handleDeleteCancel}
          handleDeleteSubmit={handleDeleteSubmit}
        />
        <AddMovieModal
          isOpen={shouldOpenAddModal}
          handleAddCancel={handleAddCancel}
          handleAddSubmit={handleAddSubmit}
        />
      </main>
      <Footer />
    </>
  );
};
// 337167
// 269149
