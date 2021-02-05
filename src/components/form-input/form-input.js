import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = ({ id, label, placeholder, onChange, name, value }) => {
  return (
    <>
      {label && <label className="form-input__label">{label}</label>}
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className="form-input__text"
        placeholder={placeholder}
      />
    </>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};
