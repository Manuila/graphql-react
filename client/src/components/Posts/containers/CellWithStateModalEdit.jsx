import React from 'react';
import PropTypes from 'prop-types';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import Button from '../../../common/Button/Button';
import FormEdit from '../../Forms/edit/FormEdit';
import ModalStateContainer from '../../../common/Modal/containers/ModalStateContainer';


function CellWithStateModalEdit({
  toggleIsOpenModal,
  isOpenModal,
  id,
}) {
  return (
    <td className="table-posts__cell table-posts__cell-body">
      <Button
        className="button-edit"
        onClick={() => toggleIsOpenModal(true)}
        iconId={faEdit}
      >
        edit
      </Button>
      {
          isOpenModal &&
          <FormEdit
            id={id}
            toggleIsOpen={toggleIsOpenModal}
          />
        }
    </td>
  );
}

CellWithStateModalEdit.propTypes = {
  id: PropTypes.string.isRequired,
  toggleIsOpenModal: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
};
export default ModalStateContainer(CellWithStateModalEdit);
