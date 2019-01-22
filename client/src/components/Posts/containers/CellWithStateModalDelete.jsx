import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Button from '../../../common/Button/Button';
import PopupWindow from '../../../common/Modal/PopupWindow';
import ModalStateContainer from '../../../common/Modal/containers/ModalStateContainer';


class CellWithStateModalDelete extends PureComponent {
  delete = async () => {
    const { id, deleteItem, toggleIsOpenModal } = this.props;
    try {
      await deleteItem(id);
    } catch (e) {
      throw e;
    } finally {
      toggleIsOpenModal(false);
    }
  };

  render() {
    const { isOpenModal, toggleIsOpenModal } = this.props;
    return (
      <td className="table-posts__cell table-posts__cell-body">
        <Button
          className="button-del"
          onClick={() => toggleIsOpenModal(true)}
          iconId={faTrashAlt}
        >
          delete
        </Button>
        {
          isOpenModal &&
          <PopupWindow
            hasCloseIcon
            className="modal-modal"
            title="Are you serious?"
            primaryButtonLabel="Ok"
            primaryButtonAction={() => this.delete()}
            secondaryButtonLabel="Cancel"
            secondaryButtonAction={() => toggleIsOpenModal(false)}
          />
        }
      </td>
    );
  }
}

CellWithStateModalDelete.propTypes = {
  id: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleIsOpenModal: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
};
export default ModalStateContainer(CellWithStateModalDelete);
