import React, { useState, useRef } from "react";
import { DottedIcon } from '../../assets/dotted-icon';
import {  Modal, EditMovie } from '../../components/index';
 
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

  const handleEditReset = () => {
    const form = formRef.current;
    form.setState({
      title: "",
      URL: "",
      overview: "",
      runTime: "",
      releaseDate: "",
    });
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
        <div onClick={hideDropdown} className="dotted-icon-dropdown__close-icon">X</div>
        <div onClick={openEditModal} className="dotted-icon-dropdown__option">Edit</div>
        <div onClick={openDeleteModal} className="dotted-icon-dropdown__option">Delete</div>
        <Modal
          title="EDIT MOVIE"
          isOpen={isEditModalOpen}
          firstButtonTitle = "Reset"
          secondButtonTitle = "Save"
          onSubmit={handleEditSubmit}
          onReset={handleEditReset}
          onCancel={handleEditCancel}
        >
          <EditMovie ref={formRef}></EditMovie>
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