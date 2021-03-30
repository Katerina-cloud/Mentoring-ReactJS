import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DottedIconDropdown, Chip } from '..';
import { formatGenre, formatYear, buildMovieDetailsLink } from './helpers';

const noop = () => {};

export const Film = ({
  id,
  title,
  genres,
  year,
  imageSource,
  openDeleteMovie = noop,
  openEditMovie = noop,
}) => {
  const genresString = formatGenre(genres);
  const yearToRender = formatYear(year);
  const movieDetailsLink = buildMovieDetailsLink(id);
  const imgAlt = `${title} poster`;

  return (
    <div className="film">
      <Link to={movieDetailsLink}>
        <img src={imageSource} className="film__image" alt={imgAlt} />
      </Link>
      <div className="film__dropdown">
        <DottedIconDropdown openEditModal={openEditMovie} openDeleteModal={openDeleteMovie} />
      </div>
      <div className="film__footer">
        <div>
          <div className="film__title film__text">{title}</div>
          <div className="film__category film__text">{genresString}</div>
        </div>
        <Chip year={yearToRender} />
      </div>
    </div>
  );
};

Film.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  genres: PropTypes.array,
  year: PropTypes.string,
  imageSource: PropTypes.string,
  openDeleteMovie: PropTypes.func,
  openEditMovie: PropTypes.func,
};
