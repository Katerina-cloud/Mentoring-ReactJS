import React from "react";

export const Button = ({ title, color, textColor }) => {
  return (
    <button className={`button button--text-${textColor} button--${color}`}>{title}</button>
  )
}