import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../index';

export const Modal = ({ title, onCancel, children }) => (
  <Portal>
    <div className="modal__overlay">
      <div className="modal__window">
        <div className="modal__header">
          <button className="modal__icon" onClick={onCancel}>
            X
          </button>
          <h1 className="modal__title">{title}</h1>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  </Portal>
);

Modal.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: '',
  onCancel: () => {},
  children: null,
};
