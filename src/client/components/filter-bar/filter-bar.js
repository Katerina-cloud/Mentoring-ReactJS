import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterButton, Dropdown } from '..';
import { setFilterGenre } from '../../store/actions/movies';
import { moviesSelector } from '../../store/selectors/';

export const FilterBar = () => {
  const dispatch = useDispatch();

  const onClick = (genre) => {
    dispatch(setFilterGenre(genre));
  };
  const movies = useSelector(moviesSelector);
  const genres = [];

  if (movies) {
    const allGenres = movies
      .map((movie) => movie.genres)
      .flat()
      .sort();

    const uniqueGenres = new Set(allGenres);
    for (let genre of uniqueGenres) {
      genres.push({ title: genre });
      if (genres.length > 5) break;
    }
  }

  return (
    <div className="filter-bar__wrapper">
      <div className="filter-bar">
        <div className="filter-bar__buttons">
          {genres.map((item, index) => (
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
