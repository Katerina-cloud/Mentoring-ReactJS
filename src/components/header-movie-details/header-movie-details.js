import React from "react";
import { SearchIcon } from '../../assets/icons/search';
import { Raiting, Logo } from '../../components/';

export const HeaderMovieDetails = ({movie}) => {
  const {title, raiting, overview, year, duration, description } = movie

  return (
    <header className="movie-details">
      <div className="movie-details__header">
        <Logo />
        <SearchIcon />
      </div>
      <div className="movie-details__main">
        <div className="movie-details__image"></div>
        <div className="movie-details__info">
          <div className="movie-details__title-wrapper">
            <h1 className="movie-details__title">{title}</h1>
            <Raiting raiting={raiting}/>
          </div>
          <div className="movie-details__overview">{overview}</div>
          <div className="movie-details__time-wrapper">
            <div className="movie-details__time">{year}</div>
            <div className="movie-details__time">{duration}</div>
          </div>
          <p className="movie-details__description">{description}</p>
        </div>
      </div>
    </header>
  )
}