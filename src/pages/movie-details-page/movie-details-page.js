import React, { useEffect, useState } from 'react';
import { MovieDetails } from '../../components';
import { getMovieById } from '../../mock-data';

export const MovieDetailsPage = ({ movieId }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(getMovieById(movieId));
  }, [movieId]);

  return <MovieDetails movie={movie} />;
};
