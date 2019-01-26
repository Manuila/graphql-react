import ApolloClient from 'apollo-boost';
import URI from '../api/config';
import {
  ADD_POST,
  DELETE_POST,
  GET_POST_BY_ID,
  GET_POSTS,
  UPDATE_POST,
} from '../api/posts';


export const apolloClient = new ApolloClient({
  uri: URI,
});


/**
  * @param {String} id
  * @returns {Promise}
*/
export const deletePost = id => {
  return new Promise((resolve, reject) => {
    apolloClient
      .mutate({
        mutation: DELETE_POST,
        variables: { id },
        update: (cache, { data: { removePost } }) => {
          const { getAllPosts } = cache.readQuery({ query: GET_POSTS });
          cache.writeQuery({
            query: GET_POSTS,
            data: { getAllPosts: getAllPosts.filter(post => post.id !== removePost.id) },
          });
        }
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      })
  });
};

/**
 * @param {Object} post
 * @returns {Promise}
*/
export const addPost = (title, description) => {
  return new Promise((resolve, reject) => {
    apolloClient
      .mutate({
        mutation: ADD_POST,
        variables: {
          title,
          description,
        },
        update: (cache, { data: { addPost } }) => {
          const { getAllPosts } = cache.readQuery({ query: GET_POSTS });
          cache.writeQuery({
            query: GET_POSTS,
            data: { getAllPosts: [addPost].concat(getAllPosts) },
          });
        },
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
  * @param {Object} post
  * @returns {Promise}
*/
export const updatePost = (updatedPost) => {
  return new Promise((resolve, reject) => {
    apolloClient
      .mutate({
        mutation: UPDATE_POST,
        variables: {
          id: updatedPost.get('id'),
          title: updatedPost.get('title'),
          description: updatedPost.get('description'),
          isPublished: updatedPost.get('isPublished'),
          isLiked: updatedPost.get('isLiked'),
        },
        update: (cache, { data: { updatePost } }) => {
          const { getAllPosts } = cache.readQuery({ query: GET_POSTS });
          const index = getAllPosts.findIndex(post => post.id === updatePost.id);
          getAllPosts[index] = updatePost;
          cache.writeQuery({
            query: GET_POSTS,
            data: { getAllPosts },
          });
        }
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      })
  });
};

/**
  * @param {String} id
  * @returns {Promise}
 */
export const getPostById = id => {
  return new Promise((resolve, reject) => {
    apolloClient.query({
      query: GET_POST_BY_ID,
      variables: { id }
    })
      .then((result) => {
        resolve(result.data.getPostById);
      })
      .catch((error) => {
        reject(error);
      })
  });
};

/**
  * @returns {Promise}
*/
export const getPosts = () => {
  return new Promise((resolve, reject) => {
    apolloClient.query({
      query: GET_POSTS,
    })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      })
  });
};