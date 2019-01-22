import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import queryType from './queries';
import mutation from './mutations';

const postSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation,
  })
});

export default postSchema;