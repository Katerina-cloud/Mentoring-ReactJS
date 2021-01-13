import React, { useState } from 'react';
import { DottedIcon } from '../../assets/icons/dotted-icon';
import { DeleteMovieModal, EditMovieModal } from '../../components';

export const DottedIconDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleEditToggle = (isOpen) => {
    setEditModalOpen(!isOpen);
  };

  const handleDeleteToggle = (isOpen) => {
    setDeleteModalOpen(!isOpen);
  };

  const handleEditModal = () => {
    setEditModalOpen(true);
  };

  return (
    <div className="dotted-icon-dropdown">
      <div onClick={showDropdown} className="dotted-icon-dropdown__icon">
        <DottedIcon />
      </div>
      {isDropdownOpen && (
        <div className="dotted-icon-dropdown__pop-up">
          <button onClick={hideDropdown} className="dotted-icon-dropdown__close-icon">
            X
          </button>
          <div onClick={handleEditModal} className="dotted-icon-dropdown__option">
            Edit
          </div>
          <div onClick={openDeleteModal} className="dotted-icon-dropdown__option">
            Delete
          </div>
          <EditMovieModal isOpen={isEditModalOpen} toggleOpen={handleEditToggle} />
          <DeleteMovieModal isOpen={isDeleteModalOpen} toggleOpen={handleDeleteToggle} />
        </div>
      )}
    </div>
  );
};
