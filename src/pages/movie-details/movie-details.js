import React, { useEffect, useState } from "react";
import { SearchIcon } from '../../assets/icons/search';
import { Raiting, Logo } from '../../components/';
import { getMovieById } from '../../mock-data';

export const MovieDetails = ({movieId}) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(getMovieById(movieId));
  }, []);

  return (
    <div className="movie-details">
      <div className="movie-details__header">
        <Logo />
        <SearchIcon />
      </div>
      <div className="movie-details__main">
        <div className="movie-details__image"></div>
        <div className="movie-details__info">
          <div className="movie-details__title-wrapper">
            <h1 className="movie-details__title">{movie.title}</h1>
            <Raiting raiting={movie.raiting}/>
          </div>
          <div className="movie-details__overview">{movie.overview}</div>
          <div className="movie-details__time-wrapper">
            <div className="movie-details__time">{movie.year}</div>
            <div className="movie-details__time">{movie.duration}</div>
          </div>
          <p className="movie-details__description">{movie.description}</p>
        </div>
      </div>
    </div>
  )
}