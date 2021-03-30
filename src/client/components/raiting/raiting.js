import React from 'react';
import PropTypes from 'prop-types';

export const Raiting = ({ raiting }) => {
  return <div className="raiting">{raiting}</div>;
};

Raiting.propTypes = {
  raiting: PropTypes.string,
};
