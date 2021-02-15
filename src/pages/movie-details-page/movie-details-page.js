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
import selectMovies from '../../store/selectors/movies';
import selectFilterGenre from '../../store/selectors/filterGenre';
import selecteEditMovie from '../../store/selectors/editMovie';
import selectDeleteMovie from '../../store/selectors/deleteMovie';

export const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const [currentMovie, setCurrentMovie] = useState(181808);
  let { movies } = useSelector(selectMovies);
  const { filterGenre } = useSelector(selectFilterGenre);
  const { movieToEdit } = useSelector(selecteEditMovie);
  const { movieToDelete } = useSelector(selectDeleteMovie);

  movies =
    filterGenre === null || filterGenre === 'All'
      ? movies
      : movies.filter((movie) => {
          return movie.genres.includes(filterGenre);
        });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchMovies());
  }, [dispatch]);

  const setFilmCard = (filmId) => {
    const current = movies.find(({ id }) => id === filmId);
    setCurrentMovie(current);
  };

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
                setFilmCard={() => {
                  setFilmCard(item);
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
