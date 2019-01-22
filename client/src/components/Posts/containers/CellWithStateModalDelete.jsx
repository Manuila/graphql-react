import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Button from '../../../common/Button/Button';
import PopupWindow from '../../../common/Modal/PopupWindow';
import ModalStateContainer from '../../../common/Modal/containers/ModalStateContainer';
import { DELETE_POST, GET_POSTS } from '../../../api/posts';


class CellWithStateModalDelete extends PureComponent {

  render() {
    const { isOpenModal, toggleIsOpenModal, id } = this.props;
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
          <Mutation
            mutation={DELETE_POST}
            update={(cache, { data: { removePost } }) => {
              const { posts } = cache.readQuery({ query: GET_POSTS });
              cache.writeQuery({
                query: GET_POSTS,
                data: { posts },
                //data: { posts: posts.concat([removePost]) },
              });
            }}
            >
            {removePost => (
              <PopupWindow
                hasCloseIcon
                className="modal-modal"
                title="Are you serious?"
                primaryButtonLabel="Ok"
                primaryButtonAction={() => removePost(id)}
                secondaryButtonLabel="Cancel"
                secondaryButtonAction={() => toggleIsOpenModal(false)}
              />
              )}
          </Mutation>
        }
      </td>
    );
  }
}

CellWithStateModalDelete.propTypes = {
  id: PropTypes.string.isRequired,
  toggleIsOpenModal: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
};

export default ModalStateContainer(CellWithStateModalDelete);
