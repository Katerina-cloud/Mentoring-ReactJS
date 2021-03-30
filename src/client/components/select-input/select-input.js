import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

export const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="select-input__label">
        {label}
      </label>
      <select id={props.id || props.name} {...field} {...props} className="select-input__select" />
      {meta.touched && meta.error ? <div className="select-input__error">{meta.error}</div> : null}
    </>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
