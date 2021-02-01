import React from 'react';
import { Modal, EditMovieContainer } from '..';
import { useDispatch } from 'react-redux';
import { clearEditMovie } from '../../store/actions/movies';

export const EditMovieModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const handleEditCancel = () => dispatch(clearEditMovie());

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
