import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="text-input__label">
        {label}
      </label>
      <input id={props.name} className="text-input__text" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div role="error-message" className="text-input__error">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
