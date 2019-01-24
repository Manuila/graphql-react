import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children, className }) => (
  <footer className={className}>
    { children }
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
