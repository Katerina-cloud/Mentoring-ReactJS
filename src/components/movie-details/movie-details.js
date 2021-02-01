import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderMovieDetails, Footer, FilterBar, Film } from '../../components/';
import { fetchMovies } from '../../store/actions/movies';

export const MovieDetails = ({ movie }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesData.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <HeaderMovieDetails movie={movie} />
      <main className="home-page__main">
        <div className="home-page__filter">
          <FilterBar />
        </div>
        <div className="home-page__films">
          {movies &&
            movies.map((item, index) => (
              <div key={index} className="home-page__film">
                <Film
                  year={item.release_date}
                  title={item.title}
                  genres={item.genres}
                  imageSource={item.poster_path}
                />
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
};
