import React from 'react';
import PropTypes from 'prop-types';
import { buildHomeLink } from './helpers';
import { Raiting, Logo } from '..';
import { Link } from 'react-router-dom';

export const HeaderMovieDetails = ({
  movie: { title, vote_average, overview, release_date, runtime, genres, poster_path },
}) => {
  let genresString;
  let yearToRender;
  if (genres) {
    genresString = genres.join(', ');
    yearToRender = release_date.split('-')[0];
  }
  return (
    <header className="header-movie-details">
      <div className="header-movie-details__header">
        <Link to={buildHomeLink}>
          <Logo />
        </Link>
      </div>
      <div className="header-movie-details__main">
        <img src={poster_path} className="header-movie-details__image" alt={`${title} poster`} />
        <div className="header-movie-details__info">
          <div className="header-movie-details__title-wrapper">
            <h1 className="header-movie-details__title">{title}</h1>
            <Raiting raiting={vote_average} />
          </div>
          <div className="header-movie-details__overview">{genresString}</div>
          <div className="header-movie-details__time-wrapper">
            <div className="header-movie-details__time">{yearToRender}</div>
            <div className="header-movie-details__time">{runtime}</div>
          </div>
          <p className="header-movie-details__description">{overview}</p>
        </div>
      </div>
    </header>
  );
};

HeaderMovieDetails.propTypes = {
  movie: {
    title: PropTypes.string,
    vote_average: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
  },
};
