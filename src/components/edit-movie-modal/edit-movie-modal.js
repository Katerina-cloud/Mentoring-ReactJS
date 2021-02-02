import React from 'react';
import { Modal, EditMovieContainer } from '..';

export const EditMovieModal = ({ isOpen, handleEditCancel }) => {
  return (
    <>
      {isOpen && (
        <Modal title="EDIT MOVIE" onCancel={handleEditCancel}>
          <EditMovieContainer />
        </Modal>
      )}
    </>
  );
};
