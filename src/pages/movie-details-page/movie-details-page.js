import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  editMovie,
} from '../../store/actions/movies';
import {
  moviesSelector,
  filterGenreSelector,
  editMovieSelector,
  deleteMovieSelector,
} from '../../store/selectors/';

export const MovieDetailsPage = () => {
  const { searchId } = useParams();
  const dispatch = useDispatch();
  let movies = useSelector(moviesSelector);
  const filterGenre = useSelector(filterGenreSelector);
  const movieToEdit = useSelector(editMovieSelector);
  const movieToDelete = useSelector(deleteMovieSelector);

  const [currentMovie, setCurrentMovie] = useState();

  movies =
    filterGenre === null || filterGenre === 'All'
      ? movies
      : movies.filter((movie) => {
          return movie.genres.includes(filterGenre);
        });

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchMovies());
    }
    const curMovie = movies.find(({ id }) => id === +searchId);
    setCurrentMovie(curMovie);
    window.scrollTo(0, 0);
  }, [searchId, movies, dispatch]);

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

  const handleEditSubmit = (movieEdit) => {
    dispatch(setEditMovie(movieEdit));
    dispatch(editMovie(movieEdit));
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
                setCurrentMovie(item);
              }}
            >
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
      </main>
      <Footer />
    </>
  );
};
