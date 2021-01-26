import React from 'react';
import { Modal, EditMovieContainer } from '..';

export const EditMovieModal = ({ isOpen, toggleOpen }) => {
  const handleEditCancel = () => toggleOpen(isOpen);

  return (
    <>
      {isOpen && (
        <Modal title="EDIT MOVIE" onCancel={handleEditCancel}>
          <EditMovieContainer toggleOpen={toggleOpen} isOpen={isOpen} />
        </Modal>
      )}
    </>
  );
};
