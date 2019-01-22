import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import { List } from 'immutable';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Post from '../__item/PostItem';
import Button from '../../../common/Button/Button';
import TABLE_TITLE from './constants';

/* eslint-disable react/no-array-index-key */
class PostsList extends PureComponent {
  state = { isUpdating: false };

  onUpdating = async () => {
    const { refreshPosts } = this.props;
    this.toggleIsUpdating(true);
    try {
      await refreshPosts();
    } catch (e) {
      throw e;
    } finally {
      this.toggleIsUpdating(false);
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  /**
   * @param {boolean} isUpdating
   * */
  toggleIsUpdating = isUpdating => this.setState({ isUpdating });

  render() {
    const {
      posts, onPostLiked, onPostPublished,
    } = this.props;

    const { isUpdating } = this.state;

    return (
      <article className="todo-component__posts">
        <div className="todo-component__posts-table">
          {
            posts.count()
              ? (
                <div>
                  <table className="table-posts">
                    <thead className="table-posts__head">
                      <tr className="table-posts__row table-posts__row-head">
                        {TABLE_TITLE.map((title, index) => (
                          <th
                            key={index}
                            className="table-posts__cell table-posts__cell-head"
                          >
                            {title}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="table-posts__body">
                      {
                    posts.map((post, i) => (
                      <Post
                        id={post.get('_id')}
                        key={post.get('_id')}
                        index={i + 1}
                        title={post.get('title')}
                        description={post.get('description')}
                        date={dateFormat(post.get('date'), 'dd.mm.yyyy HH:MM')}
                        isPublished={post.get('isPublished')}
                        isLiked={post.get('isLiked')}
                        onPostLiked={() => onPostLiked(post)}
                        onPostPublished={() => onPostPublished(post)}
                      />
                    ))}
                    </tbody>
                  </table>
                  <div className="table-posts__button">
                    <Button
                      className="button-save"
                      iconId={faSyncAlt}
                      onClick={this.onUpdating}
                      spin={isUpdating}
                    >
                      More...
                    </Button>
                  </div>
                </div>
              )
              : <div className="no-posts">No posts</div>
          }
        </div>
      </article>
    );
  }
}
PostsList.propTypes = {
  posts: PropTypes.instanceOf(List).isRequired,
  onPostLiked: PropTypes.func.isRequired,
  onPostPublished: PropTypes.func.isRequired,
  refreshPosts: PropTypes.func.isRequired,
};

export default PostsList;
