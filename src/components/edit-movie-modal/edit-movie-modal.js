import React from 'react';
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
