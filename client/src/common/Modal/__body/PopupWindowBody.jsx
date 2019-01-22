import React from 'react';
import PropTypes from 'prop-types';

const PopupWindowBody = ({ children }) => (
  <div className="modal-body">
    {children}
  </div>
);

PopupWindowBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.node,
  ]),
};

PopupWindowBody.defaultProps = {
  children: null,
};

export default PopupWindowBody;
