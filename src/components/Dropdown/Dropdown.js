import React, { useState } from 'react';

export const Dropdown = () => {
  const [selected, setSelected] = useState({ value: 'Genre' });
  const handleChange = (e) => {
    setSelected({ value: e.target.value });
    console.log(selected);
    console.log(e.target.value);
  };
  return (
    <div className="dropdown">
      <label htmlFor="films-sort" className="dropdown__label">
        Sort by
      </label>
      <select value={selected.value} onChange={handleChange} className="dropdown__select">
        <option className="dropdown__option" value="release date">
          release date
        </option>
        <option className="dropdown__option" value="genre">
          genre
        </option>
      </select>
    </div>
  );
};
