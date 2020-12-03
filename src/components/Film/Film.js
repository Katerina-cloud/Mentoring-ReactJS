import React from "react";
import PropTypes from 'prop-types';
import { Chip } from "../Chip/";
import { DottedIconDropdown } from "../Dotted-Icon-Dropdown/";

export const Film = ({image, title, category, year}) => {
  return (
    <div className="film">
      <div className="film__image">
      </div>
      <div className="film__dropdown">
        <DottedIconDropdown />
      </div>
      <div className="film__footer">
        <div>
          <div className="film__title film__text">{title}</div>
          <div className="film__category film__text">{category}</div>
        </div>
        <Chip year={year}></Chip>
      </div>
    </div>
  )
}

Film.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  year: PropTypes.string
};