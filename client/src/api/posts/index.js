import axios from 'axios';
import URL from '../config';

/**
 * @param {number} limit
 * @param {number} page
 * @returns {Promise}
 * */
export const fetchPosts = (limit, page) => axios.get(`${URL}/posts?limit=${limit}&page=${page}`);

/**
 * @param {string} postId
 * @returns {Promise}
 * */
export const fetchDeletePost = postId => axios.delete(`${URL}/posts/${postId}`);

/**
 * @param {Object} post
 * @returns {Promise}
 * */
export const fetchAddPost = post => axios.post(`${URL}/posts`, { post });

/**
 * @param {string} postId
 * @returns {Promise}
 * */
export const fetchPost = postId => axios.get(`${URL}/posts/${postId}`);

/**
 * @param {Immutable.Map} _post
 * @returns {Promise}
 * */
export const fetchUpdatePost = (_post) => {
  const post = _post.toObject();
  return axios.put(`${URL}/posts/${post._id}`, { post });
};
