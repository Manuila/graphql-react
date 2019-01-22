import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ModalContainer from './containers/ModalContainer';
import Overlay from '../Overlay/Overlay';
import PopupWindowHeader from './__header/PopupWindowHeader';
import PopupWindowBody from './__body/PopupWindowBody';
import PopupWindowFooter from './__footer/PopupWindowFooter';

import './modal.scss';

class PopupWindow extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    hasCloseIcon: PropTypes.bool,
    secondaryButtonAction: PropTypes.func.isRequired,
    primaryButtonAction: PropTypes.func.isRequired,
    primaryButtonLabel: PropTypes.string.isRequired,
    secondaryButtonLabel: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.instanceOf(React.Component),
      PropTypes.node,
    ]),
  };
  static defaultProps = {
    className: '',
    title: '',
    hasCloseIcon: false,
    children: null,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  modal = createRef();

  handleKeyUp = (e) => {
    const { secondaryButtonAction } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        // onCloseRequest();
        secondaryButtonAction();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) { keys[e.keyCode](); }
  };

  handleOutsideClick = (e) => {
    const { secondaryButtonAction } = this.props;

    if (this.modal.current !== null) {
      if (!this.modal.current.contains(e.target)) {
        secondaryButtonAction();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  };

  render() {
    const {
      className,
      title,
      hasCloseIcon,
      secondaryButtonAction,
      primaryButtonAction,
      primaryButtonLabel,
      secondaryButtonLabel,
      children,
    } = this.props;
    return (
      <ModalContainer>
        <Overlay>
          <section ref={this.modal} className={classNames('modal', className)}>
            <PopupWindowHeader
              title={title}
              hasCloseIcon={hasCloseIcon}
              CloseButtonAction={secondaryButtonAction}
            />
            <PopupWindowBody>
              {children}
            </PopupWindowBody>
            <PopupWindowFooter
              primaryButtonAction={primaryButtonAction}
              secondaryButtonAction={secondaryButtonAction}
              primaryButtonLabel={primaryButtonLabel}
              secondaryButtonLabel={secondaryButtonLabel}
            />
          </section>
        </Overlay>
      </ModalContainer>
    );
  }
}
export default PopupWindow;
