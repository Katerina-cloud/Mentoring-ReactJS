
import React from "react";
import PropTypes from 'prop-types';

export const FormInput = ({label, placeholder, onChange, name, value }) => {
console.log(Math.random().toString())

  return (
    <>
      {label && <label className="form-input__label">{label}</label>}
      <input key={Math.random().toString()} name={name} onChange={(event) => onChange(event)} value={value} className="form-input__text" placeholder={placeholder}></input>
    </>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};