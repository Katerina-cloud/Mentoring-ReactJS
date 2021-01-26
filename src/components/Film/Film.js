import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DottedIconDropdown, Chip } from '../../components/';
import { DeleteMovieModal, EditMovieModal } from '../../components';

export const Film = ({ title, genres, year, imageSource }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  let genresString;
  let yearToRender;
  if (genres) {
    genresString = genres.join(', ');
    yearToRender = year.split('-')[0];
  }

  const handleEditToggle = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  const handleDeleteToggle = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <div className="film">
      <img src={imageSource} className="film__image" alt={`${title} poster`} />
      <div className="film__dropdown">
        <DottedIconDropdown openEditModal={handleEditToggle} openDeleteModal={handleDeleteToggle} />
      </div>
      <div className="film__footer">
        <div>
          <div className="film__title film__text">{title}</div>
          <div className="film__category film__text">{genresString}</div>
        </div>
        <Chip year={yearToRender} />
      </div>
      <EditMovieModal isOpen={isEditModalOpen} toggleOpen={handleEditToggle} />
      <DeleteMovieModal isOpen={isDeleteModalOpen} toggleOpen={handleDeleteToggle} />
    </div>
  );
};

Film.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
  year: PropTypes.string,
  imageSource: PropTypes.string,
};
