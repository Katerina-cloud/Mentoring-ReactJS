import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from '../../components';
import { SECOND_BUTTON_TITLE } from './consts';

export const DeleteMovieModal = ({ isOpen, handleDeleteCancel, handleDeleteSubmit }) => {
  return (
    <>
      {isOpen && (
        <Modal title="DELETE MOVIE" secondButtonTitle="Confirm" onCancel={handleDeleteCancel}>
          <p className="delete-movie-modal__paragraph">
            Are you sure you want to delete this movie?
          </p>
          <div className="delete-movie-modal__footer">
            <div className="delete-movie-modal__button">
              <Button
                onClick={handleDeleteSubmit}
                title={SECOND_BUTTON_TITLE}
                color="red"
                size="big"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

DeleteMovieModal.propTypes = {
  isOpen: PropTypes.bool,
  handleDeleteCancel: PropTypes.func,
  handleDeleteSubmit: PropTypes.func,
};
