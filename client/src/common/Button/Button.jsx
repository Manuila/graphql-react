import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BUTTON_TYPES from './buttons.constants';
import './button.scss';


const Button = forwardRef((
  {
    className,
    disabled,
    onClick,
    type,
    children,
    iconId,
    IconClassName,
    ...props
  }
  , ref,
) => (
  <button
    className={classNames('button', { button_disabled: disabled }, className)}
    onClick={onClick}
    ref={ref}
    type={type}
    disabled={disabled}
  >
    {iconId && (
      <div className={classNames('button-icon', IconClassName)}>
        <FontAwesomeIcon
          icon={iconId}
          {...props}
        />
      </div>
    )}
    {children}
  </button>
));

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.node,
  ]),
  IconClassName: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  children: null,
  disabled: false,
  onClick: null,
  type: BUTTON_TYPES.BUTTON,
  IconClassName: null,
};

export default Button;
