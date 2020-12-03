import React from "react";
import { Chip } from "../Chip/";
import { DottedIconDropdown } from "../Dotted-Icon-Dropdown/Dotted-Icon-Dropdown";

export const Film = ({image, title, category, year}) => {
  return (
    <div className="film">
      <div className="film__image">
      </div>
      <div className="film__dropdown">
        <DottedIconDropdown />
      </div>
      <div className="film_footer">
        <div>
          <div className="film__title film__text">{title}</div>
          <div className="film__category film__text">{category}</div>
        </div>
        <Chip year={year}></Chip>
      </div>
    </div>
  )
}