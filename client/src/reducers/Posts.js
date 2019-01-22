import { fromJS } from 'immutable';
import * as POSTS_ACTION_TYPES from '../actions/posts';

const initialState = fromJS({
  posts: [],
});

const postReducer = (state = initialState, action) => {
  let newState = state;
  
  switch (action.type) {
    case POSTS_ACTION_TYPES.GET_POSTS: {
      if (newState.get('posts').count() === 0) {
        return newState.set('posts', fromJS(action.posts));
      }
      return newState.update('posts', posts =>
        posts.concat(fromJS(action.posts)));
    }
    case POSTS_ACTION_TYPES.ADD_POST: {
      return newState.update('posts', posts =>
        posts.unshift(fromJS(action.post)));
    }
    case POSTS_ACTION_TYPES.DELETE_POST: {
      return newState.update('posts', posts =>
        posts.filter(post =>
          post.get('_id') !== action.postId));
    }
    case POSTS_ACTION_TYPES.UPDATE_POST: {
      return newState.update('posts', (posts) => {
        const index = posts.findIndex(post =>
          post.get('_id') === action.post.get('_id'));
        return posts.set(index, action.post);
      });
    }
    default:
      break;
  }
  return newState;
};

export default postReducer;
