import React from 'react';
import PropTypes from 'prop-types';

export const FormDateInput = ({ label, name, onChange, value }) => {
  return (
    <>
      {label && <label className="form-date-input__label">{label}</label>}
      <input
        name={name}
        type="date"
        value={value}
        onChange={onChange}
        className="form-date-input__date"
      />
    </>
  );
};

FormDateInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
