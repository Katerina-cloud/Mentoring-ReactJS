import React from "react";
import { FilterButton, Dropdown } from "../../components/";

const data = [
  {
    title: "All",
  },
  {
    title: "Documentary",
  },
  {
    title: "Comedy",
  },
  {
    title: "Horror",
  },
  {
    title: "Crime",
  },
];

export const FilterBar = () => {
  return (
    <div className="filter-bar__wrapper">
      <div className="filter-bar">
        <div className="filter-bar__buttons">
          {data.map((item, index) => (
            <div key={index} className="filter-bar__button">
              <FilterButton title={item.title}></FilterButton>
            </div>
          ))}
        </div>
        <Dropdown></Dropdown>
      </div>
      <div className="filter-bar__border"></div>
      <div className="filter-bar__results"><span className="filter-bar__results--bold">39</span> movies found</div>
    </div>
  )
}