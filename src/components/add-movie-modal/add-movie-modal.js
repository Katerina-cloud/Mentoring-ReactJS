// import React, { useReducer, useCallback } from 'react';
import React from 'react';
import { Modal } from '../../components';
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
