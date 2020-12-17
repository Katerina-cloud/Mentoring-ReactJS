import React, { useState, useRef } from "react";
import { DottedIcon } from '../../assets/dotted-icon';
import {  Modal, EditMovieModal } from '../../components';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
 
export const DottedIconDropdown = () => {
  const formRef = useRef(null);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);
  const openEditModal = () => {
    setEditModalOpen(true);
  }
  const handleEditSubmit = () => {
    const form = formRef.current;
    console.log(form.state)
    setEditModalOpen(false);
  }
  const handleEditCancel = () => setEditModalOpen(false);
  const defaultState = {
    title: "",
    URL: "",
    overview: "",
    runTime: "",
    releaseDate: "",
  };

  const handleEditReset = () => {
    const form = formRef.current;
    form.setState(defaultState);
    console.log('handleEditReset!');
    console.log(form.state);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  }
  const handleDeleteSubmit = () => {
    console.log("handleDeleteSubmit function!");
    setDeleteModalOpen(false);
  }
  const handleDeleteCancel = () => setDeleteModalOpen(false);

  return (
    <div className="dotted-icon-dropdown">
      <div onClick={showDropdown} className="dotted-icon-dropdown__icon">
        <DottedIcon />
      </div>
      {isDropdownOpen && <div className="dotted-icon-dropdown__pop-up">
        <button onClick={hideDropdown} className="dotted-icon-dropdown__close-icon">X</button>
        <div onClick={openEditModal} className="dotted-icon-dropdown__option">Edit</div>
        <div onClick={openDeleteModal} className="dotted-icon-dropdown__option">Delete</div>
        <Modal
          title="EDIT MOVIE"
          isOpen={isEditModalOpen}
          firstButtonTitle = { FIRST_BUTTON_TITLE }
          secondButtonTitle = { SECOND_BUTTON_TITLE }
          onSubmit={handleEditSubmit}
          onReset={handleEditReset}
          onCancel={handleEditCancel}
        >
          <EditMovieModal ref={formRef}></EditMovieModal>
        </Modal>
        <Modal
          title="DELETE MOVIE"
          isOpen={isDeleteModalOpen}
          secondButtonTitle = "Confirm"
          onSubmit={handleDeleteSubmit}
          onCancel={handleDeleteCancel}
        >
          <p className="dotted-icon-dropdown__paragraph">Are you sure you want to delete this movie?</p>
        </Modal>
      </div>}
    </div>
  )
}