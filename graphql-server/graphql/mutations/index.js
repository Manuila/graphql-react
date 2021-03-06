import { GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLID } from 'graphql';
import PostType from '../types';
import postService from '../common';


const addPost = {
  type: PostType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString }
  },

  resolve: (root, params) => postService.add(params)
};

const removePost = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },

  resolve: (root, params) => postService.remove(params.id)
};

const updatePost = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    isPublished: { type: GraphQLBoolean },
    isLiked: { type: GraphQLBoolean }
  },

  resolve: (root, params) => postService.update(params)
};

export default {
  addPost,
  removePost,
  updatePost,
};
