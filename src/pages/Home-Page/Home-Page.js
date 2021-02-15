import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import {
  Header,
  Footer,
  FilterBar,
  Film,
  DeleteMovieModal,
  EditMovieModal,
  AddMovieModal,
} from '../../components/';
import {
  selectMovies,
  selectFilterGenre,
  selectEditMovie,
  selectDeleteMovie,
  selectAddMovie,
} from '../../store/selectors/';

export const HomePage = () => {
  const { criteria } = useParams();
  const dispatch = useDispatch();
  let { movies } = useSelector(selectMovies);
  const { filterGenre } = useSelector(selectFilterGenre);
  const { movieToEdit } = useSelector(selectEditMovie);
  const { movieToDelete } = useSelector(selectDeleteMovie);
  const { movieToAdd } = useSelector(selectAddMovie);

  if (criteria && movies.length) {
    movies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(criteria.toLowerCase());
    });
  }

  movies =
    filterGenre === null || filterGenre === 'All'
      ? movies
      : movies.filter((movie) => {
          return movie.genres.includes(filterGenre);
        });

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
    // dispatch(editMovie(movieToEdit));
  };

  const openAddMovie = () => {
    dispatch(setAddMovie(true));
  };
  const handleAddCancel = () => {
    dispatch(clearAddMovie(null));
  };
  const handleAddSubmit = () => {
    // dispatch(addMovie(movieToAdd));
    // dispatch(clearAddMovie(null));
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
                id={item.id}
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
