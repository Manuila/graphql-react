import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ModalContainer = ({ children }) => (
  ReactDOM.createPortal(
    <div>
      {children}
    </div>,
    document.body,
  )
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContainer;
