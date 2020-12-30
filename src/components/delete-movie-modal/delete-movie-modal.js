import React, { useCallback } from 'react';
import { Modal } from '../../components';

export const DeleteMovieModal = ({ isOpen, toggleOpen }) => {
  const handleDeleteSubmit = useCallback(() => {
    console.log('handleDeleteSubmit function!');
    toggleOpen(isOpen);
  }, [isOpen, toggleOpen]);

  const handleDeleteCancel = () => toggleOpen(isOpen);

  return (
    <>
      {isOpen && (
        <Modal
          title="DELETE MOVIE"
          secondButtonTitle="Confirm"
          onSubmit={handleDeleteSubmit}
          onCancel={handleDeleteCancel}
        >
          <p className="dotted-icon-dropdown__paragraph">
            Are you sure you want to delete this movie?
          </p>
        </Modal>
      )}
    </>
  );
};
