import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterButton, Dropdown } from '../../components/';
import { setFilterByGenre } from '../../store/actions/movies';

const data = [
  {
    title: 'All',
  },
  {
    title: 'Documentary',
  },
  {
    title: 'Comedy',
  },
  {
    title: 'Horror',
  },
  {
    title: 'Crime',
  },
];
export const FilterBar = () => {
  const dispatch = useDispatch();

  const onClick = (genre) => {
    dispatch(setFilterByGenre(genre));
  };
  return (
    <div className="filter-bar__wrapper">
      <div className="filter-bar">
        <div className="filter-bar__buttons">
          {data.map((item, index) => (
            <div key={index} className="filter-bar__button">
              <FilterButton title={item.title} onFilterClick={() => onClick(item.title)} />
            </div>
          ))}
        </div>
        <Dropdown />
      </div>
      <div className="filter-bar__border" />
      <div className="filter-bar__results">
        <span className="filter-bar__results--bold">39</span> movies found
      </div>
    </div>
  );
};
