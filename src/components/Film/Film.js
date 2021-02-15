import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DottedIconDropdown, Chip } from '../../components/';

export const Film = ({
  title,
  genres,
  year,
  imageSource,
  openDeleteMovie,
  openEditMovie,
  setFilmCard,
}) => {
  let genresString;
  let yearToRender;
  if (genres) {
    genresString = genres.join(', ');
    yearToRender = year.split('-')[0];
  }

  return (
    <div className="film">
      <Link to="/film">
        <img
          src={imageSource}
          className="film__image"
          alt={`${title} poster`}
          onClick={setFilmCard}
        />
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
  title: PropTypes.string,
  genres: PropTypes.array,
  year: PropTypes.string,
  imageSource: PropTypes.string,
};
