import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

export const DateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="date-input__label">
        {label}
      </label>
      <input id={props.id || props.name} className="date-input__date" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div role="error-message" className="date-input__error">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

DateInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
