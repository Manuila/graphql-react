import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './spinner.scss';


const Spinner = ({ className, text, ...props }) => (
  <div className={classNames('spinner', className)}>
    <FontAwesomeIcon
      icon={faSpinner}
      spin
      {...props}
    />
    <span className="spinner-text">
      {text}
    </span>
  </div>
);

Spinner.propTypes = {
  text: PropTypes.string,
};

Spinner.defaultProps = {
  text: null,
};

export default Spinner;
