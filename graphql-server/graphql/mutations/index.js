import {GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLID} from 'graphql';
import PostType from '../types';
import MongoDBPostDAO from '../../dao/MongoDBPostDAO';
import PostService from '../../services/PostService';
import config from '../../config';


const postDAO = new MongoDBPostDAO(config.MONGO_URI);
const postService = new PostService(postDAO);


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

const getPostById = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },

  resolve: (root, params) => postService.getById(params.id)
};

export default {
  addPost,
  removePost,
  updatePost,
  getPostById,
};
