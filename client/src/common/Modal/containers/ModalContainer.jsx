import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ModalContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const {
      children,
    } = this.props;

    return ReactDOM.createPortal(
      <div>
        {children}
      </div>,
      document.body,
    );
  }
}
