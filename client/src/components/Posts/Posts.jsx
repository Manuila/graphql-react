import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Query } from 'react-apollo';
import { getPosts, updatePost } from '../../actions/posts';
import PostsList from './__list/PostsList';
import PostHeader from './__header/PostHeader';
import { DEFAULT_POSTS_COUNT } from './posts.costants';
import Spinner from '../../common/Spinner/Spinner';
import { getAllPosts } from '../../selectors/posts';

import './posts.scss';
import { GET_POSTS } from '../../api/posts';


class Posts extends Component {
  state = {
    arePostsLoading: false,
    page: 0,
  };

  componentDidMount() {

  }

  /**
   * @param {Immutable.Map} post
   * */
  updatePost = async (post) => {
    const { dispatchUpdatePost } = this.props;
    try {
      await dispatchUpdatePost(post);
    } catch (e) {
      throw e;
    }
  };

  /* eslint-disable no-param-reassign */
  /**
   * @param {Immutable.Map} post
   * */
  handlePostPublished = async (post) => {
    const updatedPost = post.update('isPublished', isPublished => !isPublished);
    await this.updatePost(updatedPost);
  };

  /**
   * @param {Immutable.Map} post
   * */
  handlePostLiked = async (post) => {
    const updatedPost = post.update('isLiked', isLiked => !isLiked);
    await this.updatePost(updatedPost);
  };

  refreshPosts = async () => {
    const { page } = this.state;
    try {
      await getPosts(DEFAULT_POSTS_COUNT, page);
      this.setState({ page: page + 1 });
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <article className="todo-component">
        <div className="todo-component__wrapper">
          <PostHeader onPostAdd={this.addPost} />
          <Query query={GET_POSTS}>
            {({ loading, error, data }) => {
              if (loading) {
                return <Spinner />;
              }
              if (error) {
                return <p>Error :(</p>;
              }
              return (
                <PostsList
                  posts={data}
                  onPostLiked={this.handlePostLiked}
                  onPostPublished={this.handlePostPublished}
                  refreshPosts={this.refreshPosts}
                />
              );
            }}
          </Query>
        </div>
      </article>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.instanceOf(List).isRequired,
  dispatchUpdatePost: PropTypes.func.isRequired,
  dispatchGetPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});

const mapDispatchToProps = {
  dispatchGetPosts: getPosts,
  dispatchUpdatePost: updatePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
