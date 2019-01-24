import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import Button from '../../../../common/Button/Button';
import FormAdd from '../../../Forms/add/FormAdd';
import ModalStateContainer from '../../../../common/Modal/containers/ModalStateContainer';


const PostHeaderButtonEdit = ({
  toggleIsOpenModal,
  isOpenModal
}) => (
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

PostHeaderButtonEdit.propTypes = {
  toggleIsOpenModal: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
};

export default ModalStateContainer(PostHeaderButtonEdit);
