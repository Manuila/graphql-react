import React from 'react';
import PropTypes from 'prop-types';


const PopupWindowHeader = ({
  title,
  hasCloseIcon,
  CloseButtonAction,
  ...props
}) => (
  <div className="modal-header">
    <div className="modal-title">{title}</div>
    {hasCloseIcon &&
      <button
        type="button"
        className="modal-button-close"
        onClick={CloseButtonAction}
        {...props}
      >
        <span className="modal-button-close__text">&times;</span>
      </button>
    }
  </div>
);

PopupWindowHeader.propTypes = {
  title: PropTypes.string,
  hasCloseIcon: PropTypes.bool,
  CloseButtonAction: PropTypes.func,
};

PopupWindowHeader.defaultProps = {
  title: null,
  hasCloseIcon: false,
  CloseButtonAction: null,
};

export default PopupWindowHeader;
