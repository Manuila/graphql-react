import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children, className }) => (
  <footer className={className}>
    { children }
  </footer>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
