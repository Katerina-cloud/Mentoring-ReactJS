import React from "react";
import PropTypes from 'prop-types';

export const Button = ({ title, color, textColor }) => {
  return (
    <button className={`button button--text-${textColor} button--${color}`}>{title}</button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string
};