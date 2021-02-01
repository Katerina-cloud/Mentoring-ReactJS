import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setEditMovie, setDeleteMovie } from '../../store/actions/movies';
import {
  Header,
  Footer,
  FilterBar,
  Film,
  DeleteMovieModal,
  EditMovieModal,
} from '../../components/';

export const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesData.movies);
  const movieToEdit = useSelector((state) => state.moviesData.editMovie);
  const movieToDelete = useSelector((state) => state.moviesData.deleteMovie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const shouldOpenEditModal = Boolean(movieToEdit);
  const shouldOpenDeleteModal = Boolean(movieToDelete);

  const openEditMovie = (filmId) => {
    const movie = movies.find(({ id }) => id === filmId);
    dispatch(setEditMovie(movie));
  };

  const openDeleteMovie = (filmId) => {
    const movie = movies.find(({ id }) => id === filmId);
    dispatch(setDeleteMovie(movie));
  };

  return (
    <>
      <Header />
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
        <EditMovieModal isOpen={shouldOpenEditModal} />
        <DeleteMovieModal isOpen={shouldOpenDeleteModal} />
      </main>
      <Footer />
    </>
  );
};
