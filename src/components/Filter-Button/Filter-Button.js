import React from 'react';
import PropTypes from 'prop-types';

export const FilterButton = ({ title }) => {
  return <button className="filter-button">{title}</button>;
};

FilterButton.propTypes = {
  title: PropTypes.string,
};
