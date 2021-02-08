import React from 'react';
import PropTypes from 'prop-types';

export const FilterButton = ({ title, onFilterClick }) => {
  return (
    <button className="filter-button" onClick={onFilterClick}>
      {title}
    </button>
  );
};

FilterButton.propTypes = {
  title: PropTypes.string,
  onFilterClick: PropTypes.func,
};
