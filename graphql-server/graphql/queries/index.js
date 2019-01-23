import { GraphQLObjectType, GraphQLList }  from 'graphql';
import postType from '../types';
import config from '../../config';
import MongoDBPostDAO from '../../dao/MongoDBPostDAO';
import PostService from '../../services/PostService';


const postDAO = new MongoDBPostDAO(config.MONGO_URI);
const postService = new PostService(postDAO);

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