import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import Button from '../../../../common/Button/Button';
import FormAdd from '../../../Forms/add/FormAdd';
import ModalStateContainer from '../../../../common/Modal/containers/ModalStateContainer';


class PostHeaderButtonWithStateModalEdit extends PureComponent {
  static propTypes = {
    toggleIsOpenModal: PropTypes.func.isRequired,
    isOpenModal: PropTypes.bool.isRequired,
  };
  render() {
    const { toggleIsOpenModal, isOpenModal } = this.props;
    return (
      <Fragment>
        <Button
          className="button_cyan"
          onClick={() => toggleIsOpenModal(true)}
          iconId={faPlusSquare}
        >
          create
        </Button>
        {
          isOpenModal &&
          <FormAdd
            toggleIsOpen={toggleIsOpenModal}
          />
        }
      </Fragment>
    );
  }
}

export default ModalStateContainer(PostHeaderButtonWithStateModalEdit);
