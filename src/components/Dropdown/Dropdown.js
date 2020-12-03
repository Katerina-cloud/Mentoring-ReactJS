import React from "react";

export const Dropdown = () => {
  return (
    <div className="dropdown">
      <label for="films-sort" id="films-sort" className="dropdown__label">Sort by</label>
      <select className="dropdown__select">
        <option className="dropdown__option" selected value="release date">release date</option>
        <option className="dropdown__option" value=""></option>
        <option className="dropdown__option" value=""></option>
      </select>
    </div>
  )
}