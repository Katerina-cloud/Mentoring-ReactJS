import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortParameter } from '../../store/actions/movies';
import { SORTINGS } from '../../const/sortings';

export const Dropdown = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({ value: SORTINGS.RELEASE_DATE });

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
        <option className="dropdown__option" value={SORTINGS.RELEASE_DATE}>
          release date
        </option>
        <option className="dropdown__option" value={SORTINGS.VOTE_AVERAGE}>
          rating
        </option>
      </select>
    </div>
  );
};
