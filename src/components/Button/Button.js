import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, title, color, textColor, borderColor }) => {
  return (
    <button
      onClick={onClick}
      className={`button button--text-${textColor} button--${color} button--border-${borderColor}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
};
