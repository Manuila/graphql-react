import React, { PureComponent } from 'react';
import { fromJS } from 'immutable';
import { Query } from 'react-apollo';

import { DEFAULT_POSTS_COUNT } from './posts.costants';
import { GET_POSTS } from '../../api/posts';
import { updatePost } from '../../actions';
import PostsList from './__list/PostsList';
import PostHeader from './__header/PostHeader';
import Spinner from '../../common/Spinner/Spinner';

import './posts.scss';


class Posts extends PureComponent {

  /**
   * @param {Immutable.Map} post
   * */
  handlePostPublished = async (post) => {
    const updatedPost = post.update('isPublished', isPublished => !isPublished);
    await updatePost(updatedPost);

  };

  /**
   * @param {Immutable.Map} post
   * */
  handlePostLiked = async (post) => {
    const updatedPost = post.update('isLiked', isLiked => !isLiked);
    await updatePost(updatedPost);
  };

  refreshPosts = async () => null;

  render() {
    return (
      <article className="todo-component">
        <div className="todo-component__wrapper">
          <PostHeader label='posts'/>
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
                  posts={fromJS(data.getAllPosts)}
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
