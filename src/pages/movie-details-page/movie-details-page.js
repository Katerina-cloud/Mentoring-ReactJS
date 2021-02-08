import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderMovieDetails,
  Footer,
  FilterBar,
  Film,
  DeleteMovieModal,
  EditMovieModal,
} from '../../components/';
import {
  fetchMovies,
  setEditMovie,
  setDeleteMovie,
  clearDeleteMovie,
  deleteMovie,
  clearEditMovie,
} from '../../store/actions/movies';

export const MovieDetailsPage = ({ movie }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesData.movies);
  const movieToEdit = useSelector((state) => state.moviesData.editMovie);
  const movieToDelete = useSelector((state) => state.moviesData.deleteMovie);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const shouldOpenEditModal = Boolean(movieToEdit);
  const shouldOpenDeleteModal = Boolean(movieToDelete);

  const openEditMovie = (filmId) => {
    const movieEdit = movies.find(({ id }) => id === filmId);
    dispatch(setEditMovie(movieEdit));
  };

  const openDeleteMovie = (filmId) => {
    const movieDelete = movies.find(({ id }) => id === filmId);
    dispatch(setDeleteMovie(movieDelete));
  };

  const handleDeleteCancel = () => dispatch(clearDeleteMovie());
  const handleDeleteSubmit = () => {
    dispatch(deleteMovie(movieToDelete.id));
    dispatch(clearDeleteMovie());
  };

  const handleEditCancel = () => dispatch(clearEditMovie());

  const handleEditSubmit = () => {
    dispatch(clearEditMovie());
  };

  return (
    <>
      {currentMovie && <HeaderMovieDetails movie={currentMovie} />}
      <main className="home-page__main">
        <div className="home-page__filter">
          <FilterBar />
        </div>
        <div className="home-page__films">
          {movies.map((item, index) => (
            <div
              key={index}
              className="home-page__film"
              onClick={() => {
                console.log('setCurrentMovie');
                setCurrentMovie(item);
              }}
            >
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
      </main>
      <Footer />
    </>
  );
};
