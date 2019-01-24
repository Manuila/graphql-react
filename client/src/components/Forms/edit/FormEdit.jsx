import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { getPostById, updatePost } from '../../../actions';
import PopupWindow from '../../../common/Modal/PopupWindow';
import Overlay from '../../../common/Overlay/Overlay';
import Spinner from '../../../common/Spinner/Spinner';

import './form-edit.scss';


class FormEdit extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    toggleIsOpen: PropTypes.func.isRequired,
  };

  state = {
    post: Map(),
    isLoading: false,
    titleValue: '',
    descriptionValue: '',
  };

  async componentDidMount() {
    const { id } = this.props;
    this.toggleIsLoading(true);
    try {
      const post = await getPostById(id);
      this.setPost(Map(post));
    } catch (e) {
      throw e;
    } finally {
      this.toggleIsLoading(false);
      if (this.titleInput) this.titleInput.focus();
    }
  }

  /**
   * @param {Event} event
   */
  handleTitleValueChange = (event) => {
    this.setState({ titleValue: event.target.value });
  };

  /**
   * @param {Event} event
   */
  handleDescriptionValueChange = (event) => {
    this.setState({ descriptionValue: event.target.value });
  };
  /**
   * @param {boolean} isLoading
   * */
  toggleIsLoading = isLoading => this.setState({ isLoading });

  /**
   * @param {Immutable.Map} post
   * */
  setPost = post => this.setState({ post });

  updatePost = async () => {
    const { post } = this.state;
    const { toggleIsOpen } = this.props;
    const title = this.titleInput.current.value;
    const description = this.descriptionInput.current.value;
    const updatedPost = post
      .set('title', title)
      .set('description', description);
    this.toggleIsLoading(true);
    try {
      await updatePost(updatedPost);
    } catch (e) {
      throw e;
    } finally {
      toggleIsOpen(false);
      this.toggleIsLoading(false);
    }
  };

  /**
   * @param {Event} event
   */
  onSubmit = (event) => {
    event.preventDefault();
    this.updatePost();
  };

  render() {
    const {
      isLoading, post, titleValue, descriptionValue,
    } = this.state;
    const { toggleIsOpen } = this.props;
    return (
      <Fragment>
        { isLoading
          ? (
            <Overlay
              active
            >
              <Spinner />
            </Overlay>
          )
          : (
            <PopupWindow
              className="modal-modal"
              title="Edit post"
              hasCloseIcon
              primaryButtonLabel="Ok"
              primaryButtonAction={this.onSubmit}
              secondaryButtonLabel="Cancel"
              secondaryButtonAction={() => toggleIsOpen(false)}
            >
              <form className="form-edit" onSubmit={this.onSubmit}>
                <div className="form-edit__row">
                  <input
                    value={titleValue}
                    onChange={this.handleTitleValueChange}
                    ref={(input) => { this.titleInput = input; }}
                    required
                    className="form-edit-input"
                    defaultValue={post.get('title')}
                  />
                </div>
                <div className="form-edit__row">
                  <textarea
                    value={descriptionValue}
                    onChange={this.handleDescriptionValueChange}
                    className="form-edit-textarea"
                    rows="5"
                    name="text"
                    defaultValue={post.get('description')}
                  />
                </div>
              </form>
            </PopupWindow>
          )
        }
      </Fragment>
    );
  }
}

export default FormEdit;