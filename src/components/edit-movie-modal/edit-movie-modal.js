import React from 'react';
import PropTypes from 'prop-types';
import { Modal, EditMovie } from '../../components';

export const EditMovieModal = ({ isOpen, handleEditCancel, handleEditSubmit }) => {
  return (
    <>
      {isOpen && (
        <Modal title="EDIT MOVIE" onCancel={handleEditCancel}>
          <EditMovie handleEditSubmit={handleEditSubmit} />
        </Modal>
      )}
    </>
  );
};

EditMovieModal.propTypes = {
  isOpen: PropTypes.bool,
  handleEditCancel: PropTypes.func,
  handleEditSubmit: PropTypes.func,
};
