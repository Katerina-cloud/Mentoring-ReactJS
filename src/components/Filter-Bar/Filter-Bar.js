import React from "react";
import { FilterButton } from "../Filter-Button/";
import { Dropdown } from "../Dropdown/";

export const FilterBar = () => {
  return (
    <div className="filter-bar__wrapper">
      <div className="filter-bar">
        <div className="filter-bar__buttons">
          <div className="filter-bar__button">
            <FilterButton title="All"></FilterButton>
          </div>
          <div className="filter-bar__button">
            <FilterButton title="Documentary"></FilterButton>
          </div>
          <div className="filter-bar__button">
            <FilterButton title="Comedy"></FilterButton>
          </div>
          <div className="filter-bar__button">
            <FilterButton title="Horror"></FilterButton>
          </div>
          <div className="filter-bar__button">
            <FilterButton title="Crime"></FilterButton>
          </div>
        </div>
        <Dropdown></Dropdown>
      </div>
      <div className="filter-bar__border"></div>
      <div className="filter-bar__results"><span className="filter-bar__results--bold">39</span> movies found</div>
    </div>
  )
}