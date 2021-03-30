import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '..';
import { AddMovie } from '../add-movie/add-movie';

export const AddMovieModal = ({ isOpen, handleAddSubmit, handleAddCancel }) => {
  return (
    <>
      {isOpen && (
        <Modal onCancel={handleAddCancel} title="Add movie">
          <AddMovie handleAddSubmit={handleAddSubmit} />
        </Modal>
      )}
    </>
  );
};

AddMovieModal.propTypes = {
  isOpen: PropTypes.bool,
  handleAddSubmit: PropTypes.func,
  handleAddCancel: PropTypes.func,
};
