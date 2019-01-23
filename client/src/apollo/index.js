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


export const deletePost = id => {
  return new Promise((resolve, reject) => {
    apolloClient
      .mutate({
        mutation: DELETE_POST,
        variables: { id },
        update: (cache, { data: { removePost } }) => {
          const { posts } = cache.readQuery({ query: GET_POSTS });
          cache.writeQuery({
            query: GET_POSTS,
            data: { posts: posts.filter(post => post.id !== removePost.id) },
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

export const addPost = (title, description) => {
  return new Promise((resolve, reject) => {
    apolloClient
      .mutate({
        mutation: ADD_POST,
        variables: {
          title,
          description
        },
        update: (cache, { data: { addPost } }) => {
          const { posts } = cache.readQuery({ query: GET_POSTS });
          cache.writeQuery({
            query: GET_POSTS,
            data: { posts: [addPost].concat(posts) },
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
          const { posts } = cache.readQuery({ query: GET_POSTS });
          const index = posts.findIndex((post) => post.id === updatePost.id);
          posts[index] = updatePost;
          console.log(posts);
          cache.writeQuery({
            query: GET_POSTS,
            data: { posts },
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

export const getPostById = id => {
  return new Promise((resolve, reject) => {
    apolloClient.mutate({
      mutation: GET_POST_BY_ID,
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