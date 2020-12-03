import React from "react";
import PropTypes from 'prop-types';

export const Chip = ({ year }) => {
  return (
    <div className="chip">{year}</div>
  )
}

Chip.propTypes = {
  year: PropTypes.string,
};