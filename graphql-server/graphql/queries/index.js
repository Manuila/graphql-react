import { GraphQLObjectType, GraphQLList }  from 'graphql';
import postType from '../types';
import postService from '../common';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      posts: {
        type: new GraphQLList(postType),
        resolve: () => postService.getAll()
      }
    };
  }
});

export default queryType;