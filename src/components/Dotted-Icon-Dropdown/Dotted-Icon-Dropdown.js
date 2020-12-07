import React from "react";
import { DottedIcon } from '../../assets/dotted-icon';

export const DottedIconDropdown = () => {
  return (
    <div className="dotted-icon-dropdown">
      <div className="dotted-icon-dropdown__icon">
        <DottedIcon />
      </div>
      <div className="dotted-icon-dropdown__pop-up dotted-icon-dropdown__pop-up--hidden">
        <div className="dotted-icon-dropdown__close-icon">X</div>
        <div className="dotted-icon-dropdown__option">Edit</div>
        <div className="dotted-icon-dropdown__option">Delete</div>
      </div>
    </div>
  )
}