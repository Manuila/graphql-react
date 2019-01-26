import { GraphQLNonNull, GraphQLList, GraphQLID }  from 'graphql';
import postType from '../types';
import postService from '../common';

const getAllPosts = {
  type: new GraphQLList(postType),
  resolve: () => postService.getAll()
};

const getPostById = {
  type: postType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (root, params) => postService.getById(params.id)
};
       
export default { 
  getAllPosts,
  getPostById,
};