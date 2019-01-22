import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

function Title({ label }) {
  return (
    <h1 className="page__title">{label}</h1>
  );
}
Title.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Title;
