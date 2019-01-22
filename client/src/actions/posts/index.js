import {
  fetchPosts,
  fetchDeletePost,
  fetchAddPost,
  fetchPost,
  fetchUpdatePost,
} from '../../api/posts';

/**
 * @param {number} limit
 * @param {number} page
 * */
export const GET_POSTS = 'posts:GET_POSTS';
export const getPosts = (limit, page) => dispatch => {
  fetchPosts(limit, page)
    .then(res => dispatch({
      type: GET_POSTS,
      posts: res.data.posts,
    }));
};

/**
 * @param {string} postId
 * */
export const DELETE_POST = 'posts:DELETE_POST';
export const deletePost = postId => dispatch => {
  fetchDeletePost(postId)
    .then(() => dispatch({
      type: DELETE_POST,
      postId,
    }));
};

/**
 * @param {Object} post
 * */
export const ADD_POST = 'posts:ADD_POST';
export const addPost = post => dispatch => {
  fetchAddPost(post)
    .then(res => dispatch({
      type: ADD_POST,
      post: res.data.post,
    }));
};

/**
 * @param {Immutable.Map} post
 * */
export const UPDATE_POST = 'posts:UPDATE_POST';
export const updatePost = post => dispatch => {
  fetchUpdatePost(post)
    .then(() => dispatch({
      type: UPDATE_POST,
      post,
    }));
};

/**
 * @param {string} postId
 * */
export const getPost = postId => fetchPost(postId)
  .then(res => res.data.post);
