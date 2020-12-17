import React, { useState, useRef } from "react";
 
export const Select = ({select, option1, option2, option3}) => {
  const [isSelectOpen, setSelectOpen] = useState(false);

  const openSelect = () => {
    setSelectOpen(true);
  }

  return (
    <div className="select">
      <div onClick={openSelect} className="select__header"></div>
      {isSelectOpen && <div className="dotted-icon-dropdown__pop-up">
        <button onClick={hideDropdown} className="dotted-icon-dropdown__close-icon">X</button>
        <button onClick={openEditModal} className="dotted-icon-dropdown__option">Edit</button>
        <button onClick={openDeleteModal} className="dotted-icon-dropdown__option">Delete</button>
      </div>}
    </div>
  )
}