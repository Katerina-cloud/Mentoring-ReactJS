import React from 'react';
import PropTypes from 'prop-types';
import { Button, Portal } from '../index';

export const Modal = ({
  title, isOpen, onCancel, onReset, onSubmit, children, firstButtonTitle, secondButtonTitle
}) => (
    <>
      { isOpen
        && (
        <Portal>
          <div className="modal__overlay">
            <div className="modal__window">
              <div className="modal__header">
                <button className="modal__icon" onClick={onCancel} >X</button>
                <h1 className="modal__title">{title}</h1>
              </div>
              <div className="modal__body">
                {children}
              </div>
              <div className="modal__footer">
                <div className="modal__button">
                  {firstButtonTitle && <Button onClick={onReset} title={firstButtonTitle} color="gray" size="big" />}
                </div>
                <div className="modal__button">
                  <Button onClick={onSubmit}title={secondButtonTitle} color="red" size="big" />
                </div>
              </div>
            </div>
          </div>
        </Portal>
        )
      }
    </>
);

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  firstButtonTitle: PropTypes.string,
  secondButtonTitle: PropTypes.string,
};

Modal.defaultProps = {
  title: '',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};
