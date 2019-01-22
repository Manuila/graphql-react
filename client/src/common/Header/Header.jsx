import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, className }) => (
  <header className={className}>
    { children }
  </header>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
