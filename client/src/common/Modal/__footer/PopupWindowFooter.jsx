import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';


class PopupWindowFooter extends PureComponent {
  componentDidMount() {
    if (this.button) this.button.current.focus();
  }

  button = createRef();

  render() {
    const {
      primaryButtonAction,
      primaryButtonLabel,
      secondaryButtonAction,
      secondaryButtonLabel,
    } = this.props;
    return (
      <div className="modal-footer">
        <Button
          ref={this.button}
          type="submit"
          className="button-save modal-button"
          onClick={primaryButtonAction}
        >
          {primaryButtonLabel}
        </Button>
        <Button
          className="button-cancel modal-button"
          onClick={secondaryButtonAction}
        >
          {secondaryButtonLabel}
        </Button>
      </div>
    );
  }
}
PopupWindowFooter.propTypes = {
  primaryButtonAction: PropTypes.func.isRequired,
  primaryButtonLabel: PropTypes.string.isRequired,
  secondaryButtonAction: PropTypes.func.isRequired,
  secondaryButtonLabel: PropTypes.string.isRequired,
};

export default PopupWindowFooter;
