import React, { PureComponent } from 'react';

const ModalStateContainer = WrappedComponent => class extends PureComponent {
    state = { isOpenModal: false };

    toggleIsOpenModal = isOpenModal => this.setState({ isOpenModal });

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          toggleIsOpenModal={this.toggleIsOpenModal}
        />
      );
    }
};
export default ModalStateContainer;
