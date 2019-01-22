import { GraphQLObjectType, GraphQLList }  from 'graphql';
import Post from '../../models/post';
import postType from '../types';


const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      posts: {
        type: new GraphQLList(postType),
        resolve: () => {
          const posts = Post.find().exec();
          if (!posts) {
            throw new Error('Error');
          }
          return posts;
        }
      }
    };
  }
});

export default queryType;