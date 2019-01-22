import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { Query } from 'react-apollo';
import PostsList from './__list/PostsList';
import PostHeader from './__header/PostHeader';
import { DEFAULT_POSTS_COUNT } from './posts.costants';
import { GET_POSTS } from '../../api/posts';
import Spinner from '../../common/Spinner/Spinner';

import './posts.scss';


class Posts extends Component {
  /**
   * @param {Immutable.Map} post
   * */
  updatePost = async (post) => post;

  /* eslint-disable no-param-reassign */
  /**
   * @param {Immutable.Map} post
   * */
  handlePostPublished = async (post) => post;

  /**
   * @param {Immutable.Map} post
   * */
  handlePostLiked = async (post) => post;

  refreshPosts = async () => null;

  render() {
    return (
      <article className="todo-component">
        <div className="todo-component__wrapper">
          <PostHeader />
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
                  posts={fromJS(data.posts)}
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

export default Posts;
