import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortParameter } from '../../store/actions/movies';

export const Dropdown = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({ value: 'release_date' });

  const handleChange = (e) => {
    setSelected({ value: e.target.value });
    dispatch(setSortParameter(e.target.value));
  };

  return (
    <div className="dropdown">
      <label htmlFor="films-sort" className="dropdown__label">
        Sort by
      </label>
      <select value={selected.value} onChange={handleChange} className="dropdown__select">
        <option className="dropdown__option" value="release_date">
          release date
        </option>
        <option className="dropdown__option" value="vote_average">
          rating
        </option>
      </select>
    </div>
  );
};
