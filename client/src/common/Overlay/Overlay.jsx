/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './overlay.scss';


const Overlay = ({ disabled, children, className }) => (
  <div className={classNames('overlay', { 'overlay_disabled': disabled }, className)}>
    {children}
  </div>
);

Overlay.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.node,
  ]),
};

Overlay.defaultProps = {
  className: null,
  children: null,
  disabled: false,
};

export default Overlay;
