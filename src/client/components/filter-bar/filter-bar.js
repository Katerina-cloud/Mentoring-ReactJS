import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterButton, Dropdown } from '..';
import { setFilterGenre } from '../../store/actions/movies';
import { moviesSelector } from '../../store/selectors/';

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
    dispatch(setFilterGenre(genre));
  };
  const movies = useSelector(moviesSelector);

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
        <span className="filter-bar__results--bold">{movies.length}</span> movies found
      </div>
    </div>
  );
};
