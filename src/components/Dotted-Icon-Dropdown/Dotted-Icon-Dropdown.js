import React, { useState } from 'react';
import { DottedIcon } from '../../assets/icons/dotted-icon';

export const DottedIconDropdown = ({ openEditModal, openDeleteModal }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = () => setDropdownOpen(true);
  const hideDropdown = () => setDropdownOpen(false);

  const handleEditModal = () => {
    openEditModal();
    hideDropdown();
  };

  const handleDeleteModal = () => {
    openDeleteModal();
    hideDropdown();
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
          <div onClick={handleDeleteModal} className="dotted-icon-dropdown__option">
            Delete
          </div>
        </div>
      )}
    </div>
  );
};
