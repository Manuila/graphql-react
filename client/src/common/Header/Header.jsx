import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, className }) => (
  <header className={className}>
    { children }
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
