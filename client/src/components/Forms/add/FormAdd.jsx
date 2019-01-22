import React, { PureComponent, createRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import PopupWindow from '../../../common/Modal/PopupWindow';
import Overlay from '../../../common/Overlay/Overlay';
import Spinner from '../../../common/Spinner/Spinner';
import { ADD_POST, GET_POSTS } from '../../../api/posts';

import './form-add.scss';


class FormAdd extends PureComponent {
  static propTypes = {
    toggleIsOpen: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
  };

  titleInput = createRef();

  descriptionInput = createRef();

  componentDidMount() {
    if (this.titleInput) this.titleInput.current.focus();
  }

  /**
   * @param {boolean} isLoading
   * */
  toggleIsLoading = isLoading => this.setState({ isLoading });

  onSubmit = (e, addPost) => {
    e.preventDefault();
    const { toggleIsOpen } = this.props;
    addPost({
      variables: {
        title: this.titleInput.current.value,
        description: this.descriptionInput.current.value,
      },
    });
    toggleIsOpen(false);
  };

  render() {
    const { toggleIsOpen } = this.props;
    const { isLoading } = this.state;
    return (
      <Fragment>
        {isLoading
          ? (
            <Overlay
              active
            >
              <Spinner />
            </Overlay>
          )
          : (
            <Mutation
              mutation={ADD_POST}
              update={(cache, { data: { addPost } }) => {
                const { posts } = cache.readQuery({ query: GET_POSTS });
                cache.writeQuery({
                  query: GET_POSTS,
                  data: { posts: posts.concat([addPost]) },
                });
              }}
            >
              {addPost => (
                <PopupWindow
                  className="modal-modal"
                  title="Add post"
                  hasCloseIcon
                  primaryButtonLabel="Ok"
                  primaryButtonAction={e => this.onSubmit(e, addPost)}
                  secondaryButtonLabel="Cancel"
                  secondaryButtonAction={() => toggleIsOpen(false)}
                >
                  <form
                    className="form-add"
                    onSubmit={e => this.onSubmit(e, addPost)}
                  >
                    <div className="form-add__row">
                      <input
                        className="form-add-input"
                        ref={this.titleInput}
                        placeholder="title"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="form-add__row">
                      <textarea
                        className="form-add-textarea"
                        rows="5"
                        name="text"
                        ref={this.descriptionInput}
                        placeholder="description"
                      />
                    </div>
                  </form>
                </PopupWindow>
              )}
            </Mutation>
          )
        }
      </Fragment>
    );
  }
}

export default FormAdd;
