import React from "react";
import PropTypes from 'prop-types';

export const FormDateInput = ({label, name, onChange, value }) => {
  return (
    <>
      {label && <label className="form-date-input__label">{label}</label>}
      <input name={name} type="date" value={value} onChange={(event) => onChange(event)} className="form-date-input__date"></input>
    </>
  )
}

FormDateInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};