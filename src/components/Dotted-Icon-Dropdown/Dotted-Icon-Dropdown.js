import React, { useState } from "react";
import { DottedIcon } from '../../assets/icons/dotted-icon';
import {  Modal, EditMovieModal } from '../../components';
 
export const DottedIconDropdown = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  }
  const handleDeleteSubmit = () => {
    console.log("handleDeleteSubmit function!");
    setDeleteModalOpen(false);
  }
  const handleDeleteCancel = () => setDeleteModalOpen(false);

  const handleEditToggle = (isOpen) => {
    setEditModalOpen(!isOpen);
  };

  const handleEditModal = () => {
    setEditModalOpen(true);
  };

  return (
    <div className="dotted-icon-dropdown">
      <div onClick={showDropdown} className="dotted-icon-dropdown__icon">
        <DottedIcon />
      </div>
      {isDropdownOpen && <div className="dotted-icon-dropdown__pop-up">
        <button onClick={hideDropdown} className="dotted-icon-dropdown__close-icon">X</button>
        <div onClick={handleEditModal} className="dotted-icon-dropdown__option">Edit</div>
        <div onClick={openDeleteModal} className="dotted-icon-dropdown__option">Delete</div>
        <EditMovieModal isOpen={isEditModalOpen} toggleOpen={handleEditToggle} />
        {isDeleteModalOpen && <Modal
          title="DELETE MOVIE"
          secondButtonTitle = "Confirm"
          onSubmit={handleDeleteSubmit}
          onCancel={handleDeleteCancel}
        >
          <p className="dotted-icon-dropdown__paragraph">Are you sure you want to delete this movie?</p>
        </Modal>}
      </div>}
    </div>
  )
}